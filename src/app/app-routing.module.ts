import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { PaymentCompleteComponent } from './pages/payment-complete/payment-complete.component';

import { UserLandingPageComponent } from './pages/user-landing-page/user-landing-page.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SportsCategoryComponent } from './pages/sports-category/sports-category.component';
import { SportsCategoryDetailComponent } from './pages/sports-category-detail/sports-category-detail.component';
import { BookingComponent } from './pages/booking/booking.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UpcomingBookingsComponent } from './pages/upcoming-bookings/upcoming-bookings.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { TournamentrankingsComponent } from './components/tournamentrankings/tournamentrankings.component';
import { TournamentmatchesComponent } from './components/tournamentmatches/tournamentmatches.component';
import { TournamentleaguesComponent } from './components/tournamentleagues/tournamentleagues.component';
import { TournamentfindteamComponent } from './components/tournamentfindteam/tournamentfindteam.component';
import { FacilitycalendarComponent } from './components/facilitycalendar/facilitycalendar.component';

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
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'trank', component: TournamentrankingsComponent },
  { path: 'tmatch', component: TournamentmatchesComponent },
  { path: 'tleague', component: TournamentleaguesComponent },
  { path: 'tfiteam', component: TournamentfindteamComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'facalendar/:id', component: FacilitycalendarComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'payment-page', component: PaymentPageComponent },
  { path: 'payment-complete', component: PaymentCompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
