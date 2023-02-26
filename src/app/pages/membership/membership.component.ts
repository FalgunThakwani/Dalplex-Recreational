import { UserService } from './../../services/user.service';
import { MembershipDetails } from './../../interfaces/MembershipDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  displayedColumns: string[] = ['id', 'type', 'startDate', 'endDate', 'reNew', 'cardInfo'];
  dataSource!: MembershipDetails[];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMemberShipDetails().subscribe((data) => {
      this.dataSource = data;
    });
  }

}
