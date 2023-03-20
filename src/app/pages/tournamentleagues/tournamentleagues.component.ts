import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tournamentleagues',
  templateUrl: './tournamentleagues.component.html',
  styleUrls: ['./tournamentleagues.component.css']
})
export class TournamentleaguesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedSport!: string;

  sports = [
    {value: '', viewValue: 'Select'},
    {value: 's1', viewValue: 'Sports1'},
    {value: 's2', viewValue: 'Sports2'},
    {value: 's3', viewValue: 'Sports3'},
  ];

  // 5 s
  displayedColumns = ['id', 'league', 'slots', 'match', 'register'];
  dataSource = new MatTableDataSource(LEAGUE_DATA);
  // 5 e

  toggle(index:number): void {  
    LEAGUE_DATA.find(item => item.id == index)!.register = 
    LEAGUE_DATA.find(item => item.id == index)!.register === 'Register' ? 'Cancel' : 'Register';

    LEAGUE_DATA.find(item => item.id == index)!.slots = 
    LEAGUE_DATA.find(item => item.id == index)!.register === 
            'Register' 
          ? LEAGUE_DATA.find(item => item.id == index)!.slots +1 
          : LEAGUE_DATA.find(item => item.id == index)!.slots -1;
  }

  applyfilter(){
    this.dataSource.filter = this.selectedSport;
  }
    
}

// 5 s

const LEAGUE_DATA = [
  {id: 1, league: 'League 1', slots: 5, match: 'Match Starts on 10 March', register: 'Register', sport: 's1'},
  {id: 2, league: 'League 2', slots: 4, match: 'Match Starts on 20 March', register: 'Register', sport: 's2'},
  {id: 3, league: 'League 3', slots: 6, match: 'Match Starts on 30 March', register: 'Register', sport: 's1'},
  {id: 4, league: 'League 4', slots: 9, match: 'Match Starts on 10 March', register: 'Register', sport: 's3'},
  {id: 5, league: 'League 5', slots: 10, match: 'Match Starts on 20 March', register: 'Register', sport: 's1'},
  {id: 6, league: 'League 6', slots: 12, match: 'Match Starts on 13 March', register: 'Register', sport: 's2'},
  {id: 7, league: 'League 7', slots: 14, match: 'Match Starts on 14 March', register: 'Register', sport: 's1'},
  {id: 8, league: 'League 8', slots: 15, match: 'Match Starts on 17 March', register: 'Register', sport: 's2'},
  {id: 9, league: 'League 9', slots: 18, match: 'Match Starts on 18 March', register: 'Register', sport: 's3'},
  {id: 10, league: 'League 10', slots: 5, match: 'Match Starts on 01 March', register: 'Register', sport: 's1'},
];
// 5 e