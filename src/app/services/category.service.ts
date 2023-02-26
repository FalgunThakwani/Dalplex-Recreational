import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SportsCategory } from '../interfaces/SportsCategory';
import { CourtDetails } from '../interfaces/CourtDetails';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllSportsCategory() : Observable<SportsCategory[]> {
    return of([
      {id: 1, name: 'badminton', thumbnail: 'assets/badminton.png'},
      {id: 2, name: 'swimming', thumbnail: 'assets/aquatics.png'},
      {id: 3, name: 'climbing', thumbnail: 'assets/climbing.png'},
      {id: 4, name: 'fitness', thumbnail: 'assets/fitness.png'},
      {id: 5, name: 'golf', thumbnail: 'assets/golf.png'},
      {id: 6, name: 'studio', thumbnail: 'assets/studio.png'}
    ]);
  }

  getAllCourtsByName(name: any) : Observable<CourtDetails[]> {
    console.log("get all cours by category " + name);
    return of([
      {id: '1', court: 'Court 1', name: 'Badminton Court 1', description: 'Max four (4) players per court. Only one member is required to book an appointment.', price: '0'},
      {id: '2', court: 'Court 2', name: 'Badminton Court 2', description: 'Max four (4) players per court. Only one member is required to book an appointment.', price: '0'},
      {id: '3', court: 'Court 3', name: 'Badminton Court 3', description: 'Max four (4) players per court. Only one member is required to book an appointment.', price: '0'}
    ]);
  }
}
