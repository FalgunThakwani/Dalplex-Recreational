import { Component, OnInit } from '@angular/core';
import { BookingDetails } from 'src/app/interfaces/BookingDetails';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'program', 'offering', 'semesters', 'registeredOn', 'status'];
  dataSource: BookingDetails[] = [
    {id: '1', program: 'Badminton Court 3', offering: 'Fri, Jan 27 2023 7:00 AM to 8:00 AM', semesters: 'n/a', registeredOn: 'Thu, Jan 26 2023 11:04 PM', status: 'Paid'},
    {id: '2', program: 'Badminton Court 1', offering: 'Sat, Jan 21 2023 9:00 AM to 10:00 AM', semesters: 'n/a', registeredOn: 'Fri, Jan 20 2023 5:41 PM', status: 'Paid'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
