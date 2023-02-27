import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MembershipDetails } from '../interfaces/MembershipDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserRole!: string;

  constructor(private http: HttpClient) { }

  getMemberShipDetails(): Observable<MembershipDetails[]> {
    return of([
      {id: '1', type: 'STUDENT: Dal Full-Time', startDate: 'Sun, Jan 1 2023', endDate: 'Sun, Apr 30 2023', reNew: 'Not Renewable', cardInfo: 'N/A'},
      {id: '2', type: 'STUDENT: Dal Full-Time', startDate: 'Sun, Jan 1 2023', endDate: 'Sun, Apr 30 2023', reNew: 'Not Renewable', cardInfo: 'N/A'}
    ]);
  }

  login(username: string, password: string) :Observable<any> {
    if(username == 'user123@dal.ca' && password == 'user@123') {
      this.currentUserRole = 'user';
      return of({message: "login success", role: 'user'});
    }else if(username == 'admin@dal.ca' && password == 'admin@123') {
      this.currentUserRole = 'admin';
      return of({message: "login success", role: 'admin'});
    }else{
      this.currentUserRole = '';
      return of({message: "Invalid username/password"});
    }
  }

  getCurrentUserRole() : string {
    return this.currentUserRole;
  }

  logout() : Observable<any> {
    return of({message: 'success'});
  }
}
