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
    this.selectedFacility ="f-"+this.id;
  }

  selectedFacility: string | undefined;
  
  facilities = [
    {value: 'f-1', viewValue: 'Pool 1'},
    {value: 'f-2', viewValue: 'Pool 2'},
    {value: 'f-3', viewValue: 'Pool 3'},
    {value: 'f-4', viewValue: 'Pool 4'},
    {value: 'f-5', viewValue: 'Pool 5'},
    {value: 'f-6', viewValue: 'Pool 6'},
    {value: 'f-7', viewValue: 'Pool 7'},
    {value: 'f-8', viewValue: 'Pool 8'},
  ];

  date: String = new Date().toISOString().split('T')[0];

  updateDate() {
    var today = new Date();
    this.date=today.toISOString().split('T')[0];
  }

   // 5 s
   displayedColumns = ['Slots', 'Booking'];
   dataSource = SLOT_DATA;
   // 5 e

}

// 5 s

const SLOT_DATA = [
  {slot: '6:00 - 7:00', status: 'Booked'},
  {slot: '7:00 - 8:00', status: 'Booked'},
  {slot: '8:00 - 9:00', status: 'Not Booked'},
  {slot: '9:00 - 10:00', status: 'Booked'},
  {slot: '10:00 - 11:00', status: 'Booked'},
  {slot: '11:00 - 12:00', status: 'Not Booked'},
  {slot: '12:00 - 13:00', status: 'Booked'},
  {slot: '13:00 - 14:00', status: 'Booked'},
  {slot: '14:00 - 15:00', status: 'Not Booked'},
  {slot: '15:00 - 16:00', status: 'Booked'},
  {slot: '16:00 - 17:00', status: 'Booked'},
  {slot: '17:00 - 18:00', status: 'Not Booked'},
  {slot: '18:00 - 19:00', status: 'Booked'},
  {slot: '19:00 - 20:00', status: 'Booked'}
    
  
];
// 5 e
