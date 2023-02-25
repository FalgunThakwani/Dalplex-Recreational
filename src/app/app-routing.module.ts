import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { TournamentleaguesComponent } from './components/tournamentleagues/tournamentleagues.component';
import { TournamentmatchesComponent } from './components/tournamentmatches/tournamentmatches.component';
import { TournamentrankingsComponent } from './components/tournamentrankings/tournamentrankings.component';
import { TournamentfindteamComponent } from './components/tournamentfindteam/tournamentfindteam.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { FacilitycalendarComponent } from './components/facilitycalendar/facilitycalendar.component';

const routes: Routes = [
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'trank', component: TournamentrankingsComponent },
  { path: 'tmatch', component: TournamentmatchesComponent },
  { path: 'tleague', component: TournamentleaguesComponent },
  { path: 'tfiteam', component: TournamentfindteamComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'facalendar/:id', component: FacilitycalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
