import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facilitycalendar',
  templateUrl: './facilitycalendar.component.html',
  styleUrls: ['./facilitycalendar.component.css']
})
export class FacilitycalendarComponent implements OnInit {

  filtersForm: FormGroup = new FormGroup({
    date: new FormControl(null,),
  });

  constructor(private _Activatedroute:ActivatedRoute) { }

  id: any;
  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.selectedFacility ="f"+this.id;
    this.applyfilter()
  }

  selectedFacility!: string ;
  
  facilities = [
    {value: '', viewValue: 'All Facilities'},
    {value: 'f1', viewValue: 'Pool 1'},
    {value: 'f2', viewValue: 'Pool 2'},
    {value: 'f3', viewValue: 'Pool 3'},
    {value: 'f4', viewValue: 'Pool 4'},
    {value: 'f5', viewValue: 'Pool 5'},
    {value: 'f6', viewValue: 'Pool 6'},
    {value: 'f7', viewValue: 'Pool 7'},
    {value: 'f8', viewValue: 'Pool 8'},
  ];

  date: String = new Date().toISOString().split('T')[0];

  updateDate() {
    var today = new Date();
    this.date=today.toISOString().split('T')[0];
  }

   // 5 s
   displayedColumns = ['FacilityId', 'Slots', 'Booking'];
   dataSource = SLOT_DATA;
   // 5 e

   applyfilter(){
    if(this.selectedFacility) {
      this.dataSource = SLOT_DATA.filter(e => e.facility == this.selectedFacility);
    } else {
      this.dataSource = SLOT_DATA;
    }
   }

}

// 5 s

const SLOT_DATA = [
  {slot: '6:00 - 7:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f1'},
  {slot: '7:00 - 8:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f1'},
  {slot: '8:00 - 9:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f1'},
  {slot: '9:00 - 10:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f1'},
  {slot: '10:00 - 11:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f1'},
  {slot: '11:00 - 12:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f1'},
  
  {slot: '6:00 - 7:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f2'},
  {slot: '7:00 - 8:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f2'},
  {slot: '8:00 - 9:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f2'},
  {slot: '9:00 - 10:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f2'},
  {slot: '10:00 - 11:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f2'},
  {slot: '11:00 - 12:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f2'},
  {slot: '12:00 - 13:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f2'},

  {slot: '13:00 - 14:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f3'},
  {slot: '14:00 - 15:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f3'},
  {slot: '15:00 - 16:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f3'},
  {slot: '16:00 - 17:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f3'},
  {slot: '17:00 - 18:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f3'},
  {slot: '18:00 - 19:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f3'},
  {slot: '19:00 - 20:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f3'},

  {slot: '12:00 - 13:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f4'},
  {slot: '13:00 - 14:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f4'},
  {slot: '14:00 - 15:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f4'},
  {slot: '15:00 - 16:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f4'},
  {slot: '16:00 - 17:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f4'},
  {slot: '17:00 - 18:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f4'},
  {slot: '18:00 - 19:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f4'},
  {slot: '19:00 - 20:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f4'},
    
  {slot: '6:00 - 7:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f8'},
  {slot: '7:00 - 8:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f8'},
  {slot: '8:00 - 9:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f8'},
  {slot: '9:00 - 10:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f8'},
  {slot: '10:00 - 11:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f8'},
  {slot: '11:00 - 12:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f8'},
  
  {slot: '6:00 - 7:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f7'},
  {slot: '7:00 - 8:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f7'},
  {slot: '8:00 - 9:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f7'},
  {slot: '9:00 - 10:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f7'},
  {slot: '10:00 - 11:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f7'},
  {slot: '11:00 - 12:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f7'},
  {slot: '12:00 - 13:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f7'},

  {slot: '13:00 - 14:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f6'},
  {slot: '14:00 - 15:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f6'},
  {slot: '15:00 - 16:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f6'},
  {slot: '16:00 - 17:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f6'},
  {slot: '17:00 - 18:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f6'},
  {slot: '18:00 - 19:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f6'},
  {slot: '19:00 - 20:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f6'},

  {slot: '12:00 - 13:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f5'},
  {slot: '13:00 - 14:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f5'},
  {slot: '14:00 - 15:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f5'},
  {slot: '15:00 - 16:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f5'},
  {slot: '16:00 - 17:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f5'},
  {slot: '17:00 - 18:00', status: 'Not Booked', date:new Date().toISOString().split('T')[0], facility:'f5'},
  {slot: '18:00 - 19:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f5'},
  {slot: '19:00 - 20:00', status: 'Booked', date:new Date().toISOString().split('T')[0], facility:'f5'}
];
// 5 e
