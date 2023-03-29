import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartApiUrl: string = environment.apiServer + "/cart";

  private count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  getCart(data:any): Observable<any> {
    return this.http.post(this.cartApiUrl+"/getCart", data, this.getHeader());
  }

  getItemsCount(data:any): Observable<any> {
    return this.http.post(this.cartApiUrl+"/getItemsCount", data, this.getHeader());
  }

  addToCart(data: any) : Observable<any> {
    return this.http.post(this.cartApiUrl+"/addToCart", data, this.getHeader());
  }

  deleteFromCart(data:any): Observable<any> {
    return this.http.delete(this.cartApiUrl+"/deleteFromCart/"+ data, this.getHeader());
  }

  updateCount(newCount: number) { 
    this.count.next(newCount);
  }
}
