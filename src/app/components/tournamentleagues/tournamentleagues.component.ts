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
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  // 5 e
    
}

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