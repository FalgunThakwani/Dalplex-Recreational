import { BookingComponent } from './pages/booking/booking.component';
import { SportsCategoryDetailComponent } from './pages/sports-category-detail/sports-category-detail.component';
import { SportsCategoryComponent } from './pages/sports-category/sports-category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { PaymentCompleteComponent } from './pages/payment-complete/payment-complete.component';



const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'categories', component: SportsCategoryComponent},
  {path: 'categories/:name', component: SportsCategoryDetailComponent},
  {path: 'booking/:id', component: BookingComponent},
  { path: 'cart-page', component: CartPageComponent },
  {path:'payment-page',component:PaymentPageComponent},
  {path:'payment-complete',component:PaymentCompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
