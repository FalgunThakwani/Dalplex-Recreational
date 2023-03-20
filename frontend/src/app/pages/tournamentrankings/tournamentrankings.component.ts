import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TournamentRanking } from 'src/app/interfaces/TournamentRanking';

@Component({
  selector: 'app-tournamentrankings',
  templateUrl: './tournamentrankings.component.html',
  styleUrls: ['./tournamentrankings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TournamentrankingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedTournament!: string ;
  selectedSport!: string ;
  selectedMatch!: string ;

  tournaments = [
    {value: '', viewValue: 'Select'},
    {value: 't1', viewValue: 'Tournaments1'},
    {value: 't2', viewValue: 'Tournaments2'},
    {value: 't3', viewValue: 'Tournaments3'},
  ];

  sports = [
    {value: '', viewValue: 'Select'},
    {value: 's1', viewValue: 'Sports1'},
    {value: 's2', viewValue: 'Sports2'},
    {value: 's3', viewValue: 'Sports3'},
  ];

  // matches = [
  //   {value: '', viewValue: 'Select'},
  //   {value: 'm1', viewValue: 'Match1'},
  //   {value: 'm2', viewValue: 'Match2'},
  //   {value: 'm3', viewValue: 'Match3'},
  // ];
  
  // 5
  columns = [
    {
      columnDef: 'position',
      header: 'Position',
      cell: (element: TournamentRanking) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Team Name',
      cell: (element: TournamentRanking) => `${element.name}`,
    },
    {
      columnDef: 'winrate',
      header: 'Win Rate',
      cell: (element: TournamentRanking) => `${element.winrate}`,
    },
    {
      columnDef: 'score',
      header: 'Score',
      cell: (element: TournamentRanking) => `${element.score}`,
    }
  ];
  dataSource = new MatTableDataSource(RANKING_DATA);

  displayedColumns = this.columns.map(c => c.columnDef);


  applyfilter() {
    this.dataSource.filter = this.selectedTournament;
  }
  
  // 5

}



const RANKING_DATA:TournamentRanking[] = [
  {
    tournament:"t1",
    sport:"s1",
    match:"m1",
    position: 1,
    name: 'Team 1',
    winrate: 100,
    score: '2-0-1-4'
  },
  {
    tournament:"t1",
    sport:"s1",
    match:"m2",
    position: 2,
    name: 'Team 2',
    winrate: 90,
    score: '0-1-4-4'
  },
  {
    tournament:"t1",
    sport:"s3",
    match:"m1",
    position: 3,
    name: 'Team 5',
    winrate: 85,
    score: '1-0-0-1'
  },
  {
    tournament:"t2",
    sport:"s1",
    match:"m1",
    position: 4,
    name: 'Team 6',
    winrate: 80,
    score: '1-0-2-0'
  },
  {
    tournament:"t2",
    sport:"s2",
    match:"m2",
    position: 5,
    name: 'Team 4',
    winrate: 50,
    score: '0-0-1-0'
  }
];