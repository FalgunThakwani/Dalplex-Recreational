import { Component, OnInit } from '@angular/core';
import { UpcomingBookingsDetails } from 'src/app/interfaces/UpcomingBookings';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css']
})
export class UpcomingBookingsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'program', 'date', 'registeredOn', 'status'];
  dataSource: UpcomingBookingsDetails[] = [
    {id: '1', program: 'Badminton Court 3', date: 'Fri, Mar 10 2023', registeredOn: 'Sat, Feb 25 2023 11:04 PM', status: 'Booked'},
    {id: '2', program: 'Badminton Court 1', date: 'Sat, Mar 21 2023', registeredOn: 'Fri, Feb 25 2023 5:41 PM', status: 'Booked'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
