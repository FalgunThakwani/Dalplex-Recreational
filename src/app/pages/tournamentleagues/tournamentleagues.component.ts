import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournamentleagues',
  templateUrl: './tournamentleagues.component.html',
  styleUrls: ['./tournamentleagues.component.css']
})
export class TournamentleaguesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedSport: string | undefined;

  sports = [
    {value: 's-0', viewValue: 'Sports1'},
    {value: 's-1', viewValue: 'Sports2'},
    {value: 's-2', viewValue: 'Sports3'},
  ];

  // 5 s
  displayedColumns = ['id', 'league', 'slots', 'match', 'register'];
  dataSource = LEAGUE_DATA 
  // 5 e

  toggle(index:number): void {  
    LEAGUE_DATA.find(item => item.id == index)!.register = 
    LEAGUE_DATA.find(item => item.id == index)!.register === 'Register' ? 'Cancel' : 'Register';
  }
    
}

// 5 s

const LEAGUE_DATA = [
  {id: 1, league: 'League 1', slots: 5, match: 'Match Starts on 10 March', register: 'Register'},
  {id: 2, league: 'League 2', slots: 4, match: 'Match Starts on 20 March', register: 'Register'},
  {id: 3, league: 'League 3', slots: 6, match: 'Match Starts on 30 March', register: 'Register'},
  {id: 4, league: 'League 4', slots: 9, match: 'Match Starts on 10 March', register: 'Register'},
  {id: 5, league: 'League 5', slots: 10, match: 'Match Starts on 20 March', register: 'Register'},
  {id: 6, league: 'League 6', slots: 12, match: 'Match Starts on 13 March', register: 'Register'},
  {id: 7, league: 'League 7', slots: 14, match: 'Match Starts on 14 March', register: 'Register'},
  {id: 8, league: 'League 8', slots: 15, match: 'Match Starts on 17 March', register: 'Register'},
  {id: 9, league: 'League 9', slots: 18, match: 'Match Starts on 18 March', register: 'Register'},
  {id: 10, league: 'League 10', slots: 5, match: 'Match Starts on 01 March', register: 'Register'},
];
// 5 e