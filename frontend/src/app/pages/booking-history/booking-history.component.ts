import { BookingService } from 'src/app/services/booking.service';
import { Component, OnInit } from '@angular/core';
import { BookingDetails } from 'src/app/interfaces/BookingDetails';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'program', 'offering', 'semesters', 'registeredOn', 'status'];
  dataSource!: BookingDetails[];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBooking().subscribe((data: any) => {
      const bookings = data.filter((item: any) => item.userid === localStorage.getItem('userid'));
      console.log(bookings);
      this.dataSource = bookings;
    });
  }

}
