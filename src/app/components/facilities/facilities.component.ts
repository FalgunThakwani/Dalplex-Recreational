import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

let facilities = [
  {    "title":"Pool 1", "subtitle":"Kids Pool", "id":"1", "occ":"10", "state" : 'hours', "desc" : 'hours',   
      "foot": "100", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 2", "subtitle":"Adults Pool", "id":"2", "occ":"20", "state" : 'hours', "desc" : 'hours',   
      "foot": "50", "w1":"10:00 to 15:00", "w2":"", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 3", "subtitle":"All Ages Pool", "id":"3", "occ":"30", "state" : 'hours', "desc" : 'hours',   
      "foot": "200", "w1":"10:00 to 15:00", "w2":"10:00 to 15:00", "w3":"", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 4", "subtitle":"Leagues Pool", "id":"4", "occ":"25", "state" : 'hours', "desc" : 'hours',   
      "foot": "150", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
      {    "title":"Pool 1", "subtitle":"Kids Pool", "id":"1", "occ":"10", "state" : 'hours', "desc" : 'hours',   
      "foot": "100", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 2", "subtitle":"Adults Pool", "id":"2", "occ":"20", "state" : 'hours', "desc" : 'hours',   
      "foot": "50", "w1":"10:00 to 15:00", "w2":"", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 3", "subtitle":"All Ages Pool", "id":"3", "occ":"30", "state" : 'hours', "desc" : 'hours',   
      "foot": "200", "w1":"10:00 to 15:00", "w2":"10:00 to 15:00", "w3":"", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 4", "subtitle":"Leagues Pool", "id":"4", "occ":"25", "state" : 'hours', "desc" : 'hours',   
      "foot": "150", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
      {    "title":"Pool 1", "subtitle":"Kids Pool", "id":"1", "occ":"10", "state" : 'hours', "desc" : 'hours',   
      "foot": "100", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 2", "subtitle":"Adults Pool", "id":"2", "occ":"20", "state" : 'hours', "desc" : 'hours',   
      "foot": "50", "w1":"10:00 to 15:00", "w2":"", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 3", "subtitle":"All Ages Pool", "id":"3", "occ":"30", "state" : 'hours', "desc" : 'hours',   
      "foot": "200", "w1":"10:00 to 15:00", "w2":"10:00 to 15:00", "w3":"", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"},
  {    "title":"Pool 4", "subtitle":"Leagues Pool", "id":"4", "occ":"25", "state" : 'hours', "desc" : 'hours',   
      "foot": "150", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00"}
]


@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],

  animations: [
    trigger('hours', [
      state('hours, void', style({ height: '0px', visibility: 'hidden' })),
      state('details', style({ height: '*', visibility: 'visible' })),
      transition('details <=> hours, void => hours',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),

    trigger('details', [
      state('hours, void', style({ height: '*', visibility: 'visible' })),
      state('details', style({ height: '0px', visibility: 'hidden' })),
      transition('details <=> hours, void => hours',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]

})
export class FacilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facilities = facilities


  toggle(index:string): void {  
 
    
    facilities.find(item => item.id == index)!.state = 
    facilities.find(item => item.id == index)!.state === 'hours' ? 'details' : 'hours';
    
    

    facilities.find(item => item.id == index)!.desc = 
    facilities.find(item => item.id == index)!.desc === 'hours' ? 'details' : 'hours';

  }

}
