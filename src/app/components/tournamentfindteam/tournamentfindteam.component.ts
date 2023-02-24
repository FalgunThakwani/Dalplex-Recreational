import { Component, OnInit } from '@angular/core';

let cards = [
  {"title":"Team 1", "subtitle":"Sport 1", "id":"1", "desc" : 'hours', "reqState" : 'Request'},
  {"title":"Team 2", "subtitle":"Sport 2", "id":"2", "desc" : 'hours', "reqState" : 'Request'},
  {"title":"Team 3", "subtitle":"Sport 3", "id":"3", "desc" : 'hours', "reqState" : 'Request'},
  {"title":"Team 4", "subtitle":"Sport 1", "id":"4", "desc" : 'hours', "reqState" : 'Request'},
  {"title":"Team 5", "subtitle":"Sport 4", "id":"5", "desc" : 'hours', "reqState" : 'Request'},
  {"title":"Team 6", "subtitle":"Sport 2", "id":"6", "desc" : 'hours', "reqState" : 'Request'},];

@Component({
  selector: 'app-tournamentfindteam',
  templateUrl: './tournamentfindteam.component.html',
  styleUrls: ['./tournamentfindteam.component.css']
})
export class TournamentfindteamComponent implements OnInit {

  constructor() { }

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
