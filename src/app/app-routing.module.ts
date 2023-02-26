import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingBookingsComponent } from './pages/upcoming-bookings/upcoming-bookings.component';
import { UserLandingPageComponent } from './pages/user-landing-page/user-landing-page.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

const routes: Routes = [
  {path:'',component:UserLandingPageComponent},
  {path:'login',component:UserLoginComponent},
  {path:'register',component:UserRegistrationComponent},
  {path:'upcomingbookings',component:UpcomingBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
