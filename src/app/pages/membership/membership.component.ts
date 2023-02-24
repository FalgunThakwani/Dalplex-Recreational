import { MembershipDetails } from './../../interfaces/MembershipDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  displayedColumns: string[] = ['id', 'type', 'startDate', 'endDate', 'reNew', 'cardInfo'];
  dataSource: MembershipDetails[] = [
    {id: '1', type: 'STUDENT: Dal Full-Time', startDate: 'Sun, Jan 1 2023', endDate: 'Sun, Apr 30 2023', reNew: 'Not Renewable', cardInfo: 'N/A'},
    {id: '2', type: 'STUDENT: Dal Full-Time', startDate: 'Sun, Jan 1 2023', endDate: 'Sun, Apr 30 2023', reNew: 'Not Renewable', cardInfo: 'N/A'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
