import { CoreService } from './../../../services/core.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {


  data!:any;
  columns=['program']
  constructor(private coreService: CoreService,private cartService:CartService) { }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["home", "facilities", "tournament", "aboutus"], false);
    this.cartService.getCart(localStorage.getItem('userid')).subscribe((data)=>{
    this.data=data;
    })
  }

  deleteItem(id:any): void{
    this.cartService.deleteFromCart(id).subscribe((data) => {
      this.data=data;
    });
  }

}
