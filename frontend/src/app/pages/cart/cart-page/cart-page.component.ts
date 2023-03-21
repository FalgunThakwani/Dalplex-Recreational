import { CoreService } from './../../../services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["facilities", "tournament", "aboutus"], false);
  }

}
