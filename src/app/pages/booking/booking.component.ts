import { Router } from '@angular/router';
import { CoreService } from './../../services/core.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Slots } from 'src/app/interfaces/Slots';
import { BookingService } from 'src/app/services/booking.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  allSlotsByDate$!: Observable<Slots[]>;
  selectedTimeInterval: string = '';
  selectedDate!: Date;
  today: Date = new Date();
  minDate: Date = new Date(this.today.getTime() + 24 * 60 * 60 * 1000);
  maxDate: Date = new Date(this.today.getTime() + 3 * 24 * 60 * 60 * 1000);

  constructor(private formBuilder: FormBuilder, private coreService: CoreService, private bookingService: BookingService, private route: Router) { }

  onTimeIntervalSelected(event: MouseEvent, timeInterval: Slots) {
    if(timeInterval.status == 'booked') return;
    this.selectedTimeInterval = timeInterval.interval;
  }

  onBookingDateChange(event: any) {
    console.log(event.value);
    this.selectedDate = event.value;
    this.selectedTimeInterval = '';
    this.allSlotsByDate$ = this.bookingService.getAllSlotsByDate(this.selectedDate);
  }

  ngOnInit() {
    this.coreService.updateMenuItems(["facilities", "tournament", "aboutus"], true);
    this.bookingForm = this.formBuilder.group({
      bookingdate: ['', [Validators.required]]
    });
  }

  onAddtoCart() {
    this.coreService.showSnackBar("Added to cart", "ok");
    this.route.navigate(['cart-page']);
  }
}
