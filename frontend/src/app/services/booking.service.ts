import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  bookingApiUrl: string = environment.apiServer + "/booking";

  constructor(private http: HttpClient) { }

  getHeader() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('sessiontoken') ?? ''
      })
    };
    return options;
  }

  createBooking(data: any) : Observable<any> {
    return this.http.post(this.bookingApiUrl, data, this.getHeader());
  }

  getAllBooking() : Observable<any> {
    return this.http.get(this.bookingApiUrl, this.getHeader());
  }

  getAllSlots() : Observable<any> {
    return this.http.get(this.bookingApiUrl + '/slot', this.getHeader());
  }

  getAllSlotsByDate(date: Date) : Observable<any>  {
    return this.http.get(this.bookingApiUrl + '/slot/' + date.toDateString() , this.getHeader());
  }

  getUpcomingBookings(userid:any): Observable<any>{
    return this.http.get(this.bookingApiUrl+"/"+userid,this.getHeader());
  }

}
