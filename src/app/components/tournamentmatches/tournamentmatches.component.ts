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
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: PeriodicElement) => `${element.weight}`,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: PeriodicElement) => `${element.symbol}`,
    },
  ];
  dataSource = ELEMENT_DATA;
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
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
// 5 e