import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-tournamentmatches',
  templateUrl: './tournamentmatches.component.html',
  styleUrls: ['./tournamentmatches.component.css']
})

export class TournamentmatchesComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  // 4 s
  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Present Matches', content: 'Content 1'},
          {label: 'Future Matches', content: 'Content 2'},
          {label: 'Past Matches', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }
  // 4 e

  ngOnInit(): void {
  }

  // 5
  columns = [
    {
      columnDef: 'id',
      header: 'Id.',
      cell: (element: Match) => `${element.id}`,
    },
    {
      columnDef: 'match',
      header: 'Match name',
      cell: (element: Match) => `${element.match}`,
    },
    {
      columnDef: 'matchinfo',
      header: 'Match Info',
      cell: (element: Match) => `${element.matchinfo}`,
    },
    {
      columnDef: 'datetime',
      header: 'Date and Time',
      cell: (element: Match) => `${element.datetime}`,
    }
  ];
  dataSource = MATCH_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  // 5

}

// 4 s
export interface ExampleTab {
  label: string;
  content: string;
}
// 4 e

// 5 s
export interface Match {
  match: string;
  id: number;
  datetime: string;
  matchinfo: string;
}

const MATCH_DATA: Match[] = [
  {id: 1, match: 'Match 1', datetime: '5-04-2023', matchinfo: 'Team X vs Team Y'},
  {id: 2, match: 'Match 2', datetime: '4-04-2023', matchinfo: 'Team A vs Team Y'},
  {id: 3, match: 'Match 3', datetime: '6-04-2023', matchinfo: 'Team B vs Team X'},
  {id: 4, match: 'Match 4', datetime: '9-04-2023', matchinfo: 'Team X vs Team Z'},
  {id: 5, match: 'Match 5', datetime: '10-04-2023', matchinfo: 'Team X vs Team A'},
  {id: 6, match: 'Match 6', datetime: '12-04-2023', matchinfo: 'Team C vs Team B'},
  {id: 7, match: 'Match 7', datetime: '14-04-2023', matchinfo: 'Team D vs Team E'},
  {id: 8, match: 'Match 8', datetime: '15-04-2023', matchinfo: 'Team X vs Team F'},
  {id: 9, match: 'Match 9', datetime: '18-04-2023', matchinfo: 'Team Z vs Team Y'},
  {id: 10, match: 'Match 10', datetime: '5-04-2023', matchinfo: 'Team C vs Team Y'},
];
// 5 e