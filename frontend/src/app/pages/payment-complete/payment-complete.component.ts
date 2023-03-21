import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-complete',
  templateUrl: './payment-complete.component.html',
  styleUrls: ['./payment-complete.component.css']
})
export class PaymentCompleteComponent implements OnInit {
  username = "Falgun";
  bookings= [{name:"Falgun Jairaj Thakwani",time:"7:00 am to 8:00 am",date:"Mar 26, 2023",sport:"BasketBall Court"},
  {name:"Falgun Jairaj Thakwani",time:"8:30 am to 9:00 am",date:"Mar 26, 2023",sport:"Swimming"}]


  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["facilities", "tournament", "aboutus"], false);
  }

}
