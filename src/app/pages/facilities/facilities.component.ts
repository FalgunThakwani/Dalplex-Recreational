import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

let facilities = [
  {    "title":"Cardio 1", "subtitle":"Fitness", "id":"1", "occ":"10", "state" : 'hours', "desc" : 'hours',   
      "foot": "100", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00","img":"assets/cardio1.png"},
  {    "title":"Pool 1", "subtitle":"Adults Pool", "id":"2", "occ":"20", "state" : 'hours', "desc" : 'hours',   
      "foot": "50", "w1":"10:00 to 15:00", "w2":"", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00","img":"assets/pool.png"},
  {    "title":"Weight Room 1", "subtitle":"Gymnasium", "id":"3", "occ":"30", "state" : 'hours', "desc" : 'hours',   
      "foot": "200", "w1":"10:00 to 15:00", "w2":"10:00 to 15:00", "w3":"", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00","img":"assets/weights.png"},
  {    "title":"Main Court 1", "subtitle":"Field House", "id":"4", "occ":"25", "state" : 'hours', "desc" : 'hours',   
      "foot": "150", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00","img":"assets/court1.png"},
  {    "title":"Track", "subtitle":"Running", "id":"5", "occ":"10", "state" : 'hours', "desc" : 'hours',   
      "foot": "100", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00","img":"assets/track1.png"},
  {    "title":"Main Court 2", "subtitle":"Field House", "id":"6", "occ":"20", "state" : 'hours', "desc" : 'hours',   
      "foot": "50", "w1":"10:00 to 15:00", "w2":"", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00","img":"assets/court1.png"},
  {    "title":"Pool 2", "subtitle":"Kids Pool", "id":"7", "occ":"30", "state" : 'hours', "desc" : 'hours',   
      "foot": "200", "w1":"10:00 to 15:00", "w2":"10:00 to 15:00", "w3":"", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00","img":"assets/pool1.png"},
  {    "title":"Dance Studio", "subtitle":"Studio", "id":"8", "occ":"25", "state" : 'hours', "desc" : 'hours',   
      "foot": "150", "w1":"", "w2":"10:00 to 15:00", "w3":"10:00 to 15:00", "w4":"10:00 to 15:00"
      , "w5":"10:00 to 15:00", "w6":"10:00 to 15:00", "w7":"10:00 to 15:00","img":"assets/dance.png"},
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
        animate('150ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),

    trigger('details', [
      state('hours, void', style({ height: '*', visibility: 'visible' })),
      state('details', style({ height: '0px', visibility: 'hidden' })),
      transition('details <=> hours, void => hours',
        animate('150ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]

})
export class FacilitiesComponent implements OnInit {

  // 8 
  cols! : number;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }


  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }
  // 8
  
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
