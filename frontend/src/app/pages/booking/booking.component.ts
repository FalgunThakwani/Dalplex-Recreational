import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CoreService } from './../../services/core.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Slots } from 'src/app/interfaces/Slots';
import { BookingService } from 'src/app/services/booking.service';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';

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
  courtDetails: any;

  constructor(private formBuilder: FormBuilder, private coreService: CoreService, private categoryService: CategoryService, private bookingService: BookingService, private route: Router, private activatedRoute: ActivatedRoute,private cartService:CartService) { }

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
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id: any = params.get('id');
      this.categoryService.getCourtById(id).subscribe((data: any) => {
        this.courtDetails = data;
      });
    });
    this.coreService.updateMenuItems(["home", "facilities", "tournament", "aboutus"], true);
    this.bookingForm = this.formBuilder.group({
      bookingdate: ['', [Validators.required]]
    });
  }

  onAddtoCart() {
    const data = {
      userid: localStorage.getItem('userid'),
      status: 'reserve',
      court_id:this.courtDetails._id,
      program: this.courtDetails.name,
      interval: this.selectedTimeInterval,
      semester: 'n/a',
      registeredon: '',
      bookingdate:this.bookingForm.get('bookingdate')?.value,
      price:this.courtDetails.price
    };
    this.cartService.addToCart(data).subscribe((data:any)=>{
      this.cartService.updateCount(data.items.length);
    });

    this.coreService.showSnackBar("Added to cart", "ok");
    // this.route.navigate(['cart-page']);
  }
}

// db.cart.insertOne({userid: localStorage.getItem('userid'),
// program: this.courtDetails.name,
// interval: this.selectedTimeInterval,
// semester: 'n/a',
// registeredon: '',
// status: 'reserve',
// created_at:'',
// update_at:''
// })
