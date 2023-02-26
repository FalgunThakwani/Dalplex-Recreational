import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceDetails } from '../interfaces/InvoiceDetails';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getInvoiceDetails() : Observable<InvoiceDetails[]> {
    return of([
      { invoice: 'I-1137251', date: 'Thu, Jan 26 2023', total: '$0.00', paid: '$0.00', owing: '$0.00' },
      { invoice: 'I-1134555', date: 'Thu, Jan 26 2023', total: '$0.00', paid: '$0.00', owing: '$0.00' },
    ]);
  }
}
