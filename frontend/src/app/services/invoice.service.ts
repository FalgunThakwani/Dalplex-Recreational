import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceDetails } from '../interfaces/InvoiceDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceApiUrl: string = environment.apiServer + "/invoice";
  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }
  getInvoiceDetails() : Observable<InvoiceDetails[]> {
    return of([
      { invoice: 'I-1137251', date: 'Thu, Jan 26 2023', total: '$0.00', paid: '$0.00', owing: '$0.00' },
      { invoice: 'I-1134555', date: 'Thu, Jan 26 2023', total: '$0.00', paid: '$0.00', owing: '$0.00' },
    ]);
  }

  getUserInvoice(data:any): Observable<any> {
    return this.http.get(this.invoiceApiUrl+"/"+data, this.getHeader());
  }

}
