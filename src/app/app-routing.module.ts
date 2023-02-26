import { BookingComponent } from './pages/booking/booking.component';
import { SportsCategoryDetailComponent } from './pages/sports-category-detail/sports-category-detail.component';
import { SportsCategoryComponent } from './pages/sports-category/sports-category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingBookingsComponent } from './pages/upcoming-bookings/upcoming-bookings.component';
import { UserLandingPageComponent } from './pages/user-landing-page/user-landing-page.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'categories', component: SportsCategoryComponent },
  { path: 'categories/:name', component: SportsCategoryDetailComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'upcomingbookings', component: UpcomingBookingsComponent },
  { path: 'landing', component: UserLandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
