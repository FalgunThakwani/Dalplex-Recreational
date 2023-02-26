import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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

  selectedTournament: string | undefined;
  selectedSport: string | undefined;
  selectedMatch: string | undefined;

  tournaments = [
    {value: 't-0', viewValue: 'Tournaments1'},
    {value: 't-1', viewValue: 'Tournaments2'},
    {value: 't-2', viewValue: 'Tournaments3'},
  ];

  sports = [
    {value: 's-0', viewValue: 'Sports1'},
    {value: 's-1', viewValue: 'Sports2'},
    {value: 's-2', viewValue: 'Sports3'},
  ];

  matches = [
    {value: 'm-0', viewValue: 'Match1'},
    {value: 'm-1', viewValue: 'Match2'},
    {value: 'm-2', viewValue: 'Match3'},
  ];
  
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position', 'name', 'winrate', 'score'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null | undefined;

}

export interface PeriodicElement {
  position: number;
  name: string;
  winrate: number;
  score: string;
  description: string;
}

const ELEMENT_DATA = [
  {
    position: 1,
    name: 'Team 1',
    winrate: 100,
    score: '2-0-1-4',
    description: `Team 1 won continuously for 8 matches and Person A was the best`,
  },
  {
    position: 2,
    name: 'Team 2',
    winrate: 1-0-1-1,
    score: 'He',
    description: `Team 2 is in high competetion with Team 1 for the top position`,
  },
  {
    position: 3,
    name: 'Team 5',
    winrate: 85,
    score: '1-0-0-1',
    description: `Team 5 lost 2 matches but waiting for a come back`,
  },
  {
    position: 4,
    name: 'Team 6',
    winrate: 80,
    score: '1-0-2-0',
    description: `Team 6 was the top in the last season, fans are still waiting for its fantastic game`,
  },
  {
    position: 5,
    name: 'Team 4',
    winrate: 50,
    score: '0-0-1-0',
    description: `Team 4 has 2 of its members injured, so couldn't perform well`,
  }
];
