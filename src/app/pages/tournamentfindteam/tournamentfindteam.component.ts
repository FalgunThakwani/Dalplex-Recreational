import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

let cards = [
  {"title":"Team 1", "subtitle":"Sport 1", "id":"1", 
  "desc" : 'Team has 8 members in total. We are looking for 4 more memebers. We usually play every day', 
  "reqState" : 'Request'},
  {"title":"Team 2", "subtitle":"Sport 2", "id":"2", 
  "desc" : 'Team has 5 members in total. We are looking for 5 more memebers. We usually play every Sunday', 
   "reqState" : 'Request'},
  {"title":"Team 3", "subtitle":"Sport 3", "id":"3", 
  "desc" : 'Team has 4 members in total. We are looking for 2 more memebers. We usually play every Weekend', 
   "reqState" : 'Request'},
  {"title":"Team 4", "subtitle":"Sport 1", "id":"4", 
  "desc" : 'Team has 2 members in total. We are looking for 4 more memebers. We are actually new to halifax, so forming a team to play the sport', 
   "reqState" : 'Request'},
  {"title":"Team 5", "subtitle":"Sport 4", "id":"5", 
  "desc" : 'Team has 4 members in total. We are looking for 2 more memebers. We usually play every Weekend', 
   "reqState" : 'Request'},
  {"title":"Team 6", "subtitle":"Sport 2", "id":"6", 
  "desc" : 'Team has 4 members in total. We are looking for 2 more memebers. We usually play every Weekend', 
   "reqState" : 'Request'},];

@Component({
  selector: 'app-tournamentfindteam',
  templateUrl: './tournamentfindteam.component.html',
  styleUrls: ['./tournamentfindteam.component.css']
})
export class TournamentfindteamComponent implements OnInit {

  cols! : number;

  gridByBreakpoint = {
    xl: 4,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }


  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }
  // 8

  ngOnInit(): void {
  }

  selectedSport: string | undefined;
  
  sports = [
    {value: 's-0', viewValue: 'Sports1'},
    {value: 's-1', viewValue: 'Sports2'},
    {value: 's-2', viewValue: 'Sports3'},
  ];

  cards = cards;

  toggle(index:string): void {  
    cards.find(item => item.id == index)!.reqState = 
    cards.find(item => item.id == index)!.reqState === 'Request' ? 'Cancel Request' : 'Request';
  }
}
