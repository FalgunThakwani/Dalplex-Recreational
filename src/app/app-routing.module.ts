import { BookingComponent } from './pages/booking/booking.component';
import { SportsCategoryDetailComponent } from './pages/sports-category-detail/sports-category-detail.component';
import { SportsCategoryComponent } from './pages/sports-category/sports-category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';



const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'categories', component: SportsCategoryComponent},
  {path: 'categories/:name', component: SportsCategoryDetailComponent},
  {path: 'booking/:id', component: BookingComponent},
  { path: 'cart-page', component: CartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
