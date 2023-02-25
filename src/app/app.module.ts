import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table' 
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { TournamentrankingsComponent } from './components/tournamentrankings/tournamentrankings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentmatchesComponent } from './components/tournamentmatches/tournamentmatches.component';
import { TournamentleaguesComponent } from './components/tournamentleagues/tournamentleagues.component';
import { TournamentfindteamComponent } from './components/tournamentfindteam/tournamentfindteam.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { FacilitycalendarComponent } from './components/facilitycalendar/facilitycalendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilitiesComponent,
    TournamentrankingsComponent,
    TournamentmatchesComponent,
    TournamentleaguesComponent,
    TournamentfindteamComponent,
    TournamentsComponent,
    FacilitycalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule,
    // MatMomentDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
