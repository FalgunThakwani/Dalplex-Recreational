import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MembershipDetails } from '../interfaces/MembershipDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiServer + "/users";

  constructor(private http: HttpClient) { }

  login(email: string, password: string) : Observable<any>{
    const data = {email: email, password: password};
    return this.http.post(environment.apiServer + '/login', data);
  }

  logout() : Observable<any> {
    return this.http.post(environment.apiServer + '/logout', {});
  }

  getMemberShipDetails(): Observable<MembershipDetails[]> {
    return of([
      {id: '1', type: 'STUDENT: Dal Full-Time', startDate: 'Sun, Jan 1 2023', endDate: 'Sun, Apr 30 2023', reNew: 'Not Renewable', cardInfo: 'N/A'},
      {id: '2', type: 'STUDENT: Dal Full-Time', startDate: 'Sun, Jan 1 2023', endDate: 'Sun, Apr 30 2023', reNew: 'Not Renewable', cardInfo: 'N/A'}
    ]);
  }
}
