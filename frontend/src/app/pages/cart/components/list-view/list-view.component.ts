import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  data!:any;
  constructor(private cartService:CartService) {}
  ngOnInit(): void {
    this.cartService.getCart(localStorage.getItem('userid')).subscribe((data)=>{
      console.log(data);
      this.data=data;
    })
  }

  deleteItem(id:any): void{
    this.cartService.deleteFromCart(id).subscribe((data) => {
      this.data=data;
    });
  }

}
