import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentMethodDetails } from '../interfaces/PaymentMethodDetails';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  getPaymentMethodDetails(): Observable<PaymentMethodDetails[]> {
    return of([
      {id: '1', name: 'test user 1', cardNumber: '111122223333', expiryDate: 'Sun, Jan 1 2023', securityCode: '123', postalCode: 'B3K 4N1'},
      {id: '2', name: 'test user 2', cardNumber: '111122223334', expiryDate: 'Sun, Jan 1 2023', securityCode: '123', postalCode: 'B3K 4N1'},
    ]);
  }
}
