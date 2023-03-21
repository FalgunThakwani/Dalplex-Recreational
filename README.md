# Group Project

* *Date Created*: 29 Jan 2023
* *Last Modification Date*: 21 Mar 2023
* *Lab URL*: <TODO>
* *Gitlab URL*: https://git.cs.dal.ca/sumitk/csci-5709-group-13.git
	Below are branch list for group project:
	* main
	* wip_sumit
	* wip_falgun
	* wip_venkata
	* wip_vinayak

## Authors

* [Sumit Kumar](sumit.kumar@dal.ca)
* [Venkata Vijaya Rama Raju Mandapati](vn520794@dal.ca)
* [Vinayak Abhinav Rupanagunta](vn958266@dal.ca)
* [Falgun Jairaj Thakwani](fl700637@dal.ca)


## Getting Started

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.
This application is created using angular. To generate a angular based project you can simply run "ng new projectname" command. [https://angular.io/tutorial/tour-of-heroes/toh-pt0#create-a-new-project]


### Prerequisites

```
https://nodejs.org/en/
https://angular.io/
https://www.npmjs.com/
```

### Installing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.
follow below steps to run the application

```
# to install all dependencies
npm install
# to run application locally
ng serve
# to build the application
npm run build 
```

## Running the tests

To run test on the angular application, below command can be used. Please note test cases were auto generated and as part of this assignment its not tested.

```
ng test
```

## Deployment

Netlify was used to deploy Angular project.

### facilities.component.ts
*Lines 69 - 95*

### tournaments.component.ts
*Lines 20 - 46*

```
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

```

The code above was created by adapting the code in https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive as shown below: 

```

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

```
- The code in https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive was implemented
- [https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive]'s Code was used because it is much related to my application and I am new to angular, so used it as a reference.
- [https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive]'s Code was modified by VenkataVijaya Mandapati


###(a) facilitycalendar.component.html
*Lines 26 - 50*
###(b) tournamentleagues.component.html
*Lines 15 - 50*
``` (a)
<section class="example-container mat-elevation-z8" tabindex="0">
    <table mat-table [dataSource]="dataSource">

      <!-- Facility Id Column -->
      <ng-container matColumnDef="FacilityId">
        <th mat-header-cell *matHeaderCellDef> Facility </th>
        <td mat-cell *matCellDef="let element"> {{element.facilityName}} </td>
      </ng-container>
  
      <!-- Slots Column -->
      <ng-container matColumnDef="Slots">
        <th mat-header-cell *matHeaderCellDef> Slots </th>
        <td mat-cell *matCellDef="let element"> {{element.slot}} </td>
      </ng-container>
  
      <!-- Booking Column -->
      <ng-container matColumnDef="Booking">
        <th mat-header-cell *matHeaderCellDef> Booking </th>
        <td mat-cell *matCellDef="let element"> {{element.status}} </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </section>
``` (b)
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  
      <!-- Id Column -->
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let league"> {{league.id}} </td>
      </ng-container>
  
      <!-- Leagues Column -->
      <ng-container matColumnDef="league">
        <th mat-header-cell *matHeaderCellDef> Leagues </th>
        <td mat-cell *matCellDef="let league"> {{league.league}} </td>
      </ng-container>
  
      <!-- Slots Column -->
      <ng-container matColumnDef="slots">
        <th mat-header-cell *matHeaderCellDef> Available SLots </th>
        <td mat-cell *matCellDef="let league"> {{league.slots}} </td>
      </ng-container>

      <!-- Match Info Column -->
      <ng-container matColumnDef="match">
        <th mat-header-cell *matHeaderCellDef> Matches Info </th>
        <td mat-cell *matCellDef="let league"> {{league.match}} </td>
      </ng-container>
  
      <!-- Register Column -->
      <ng-container matColumnDef="register">
        <th mat-header-cell *matHeaderCellDef> Register </th>
        <td mat-cell *matCellDef="let league"> <button mat-raised-button (click)="toggle(league.id)">{{league.register}}</button> </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
```
The code above was created by adapting the code in https://material.angular.io/components/table/examples as shown below: 
```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let element"> {{element.position}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef> Weight </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef> Symbol </th>
    <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

```
- The code in https://material.angular.io/components/table/examples was implemented
- [https://material.angular.io/components/table/examples]'s Code was used because it is much related to my application and I am new to angular, so used it as a reference.
- [https://material.angular.io/components/table/examples]'s Code was modified by VenkataVijaya Mandapati


### tournamentfindteam.component.html
*Lines 26 - 50*
```
<mat-card class="card">
                <mat-card-header>
                  <mat-card-title>{{card.title}}</mat-card-title>
                  <mat-card-subtitle>{{card.subtitle}}</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                  <p>{{card.desc}}</p>
                </mat-card-content>
                <mat-card-actions>
                  <button mat-stroked-button
                    matTooltip="Monday 10PM, Tuesday 7PM, Wednesday 6PM, Thursday 4PM, Friday 5PM"
                    aria-label="Button that displays a tooltip when focused or hovered over">    
                    Game Slots</button>
                  <button mat-raised-button (click)="toggle(card.id)">{{card.reqState}}</button>
                </mat-card-actions>
              </mat-card>
```
The code above was created by adapting the code in https://material.angular.io/components/card/examples as shown below: 
```
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>

```
- The code in https://material.angular.io/components/card/examples was implemented
- [https://material.angular.io/components/card/examples]'s Code was used because it is much related to my application and I am new to angular, so used it as a reference.
- [https://material.angular.io/components/card/examples]'s Code was modified by VenkataVijaya Mandapati	


### tournamentmatches.component.html
*Lines 12 - 24*
```	  
<table mat-table [dataSource]=tab.content class="mat-elevation-z8 demo-table">
        <ng-container *ngFor="let column of columns" [matColumnDef]="column.columnDef">
          <th mat-header-cell *matHeaderCellDef>
            {{column.header}}
          </th>
          <td mat-cell *matCellDef="let row">
            {{column.cell(row)}}
          </td>
        </ng-container>
      
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
```
The code above was created by adapting the code in https://material.angular.io/components/table/examples as shown below: 
```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
  <ng-container *ngFor="let column of columns" [matColumnDef]="column.columnDef">
    <th mat-header-cell *matHeaderCellDef>
      {{column.header}}
    </th>
    <td mat-cell *matCellDef="let row">
      {{column.cell(row)}}
    </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

```
- The code in https://material.angular.io/components/table/examples was implemented
- [https://material.angular.io/components/table/examples]'s Code was used because it is much related to my application and I am new to angular, so used it as a reference.
- [https://material.angular.io/components/table/examples]'s Code was modified by VenkataVijaya Mandapati


## Built With

* [Angular](https://angular.io/) - The web framework used
* [Netlify](https://app.netlify.com/) - Deployment Solution
* [Gitlab](https://git.cs.dal.ca/) - Version Control
* [VSCode](https://code.visualstudio.com/) - Editor
* [NPM] (https://www.npmjs.com/) - Node Package Manager


## External Libraries

all the libraries/packages used are available under package.json
* [Angular Material] (https://material.angular.io/) - Angular Material UI framework
* [Angular Material Form] (https://material.angular.io/components/form-field/) - Angular Material Forms
* [Angular Material Card] (https://material.angular.io/components/card/) - Angular Material Cards
* [Angular Material Table] (https://material.angular.io/components/table/) - Angular Material Tables
* [Angular Material Datasource] (https://material.angular.io/components/table/overview#1-write-your-mat-table-and-provide-data) - Angular Material Datasource
* [Angular Material Filtering] (https://material.angular.io/components/table/overview#filtering) - Angular Material Datasource filter
* [Angular HTTP] (https://angular.io/guide/http) - Angular HTTP


## References

* [1] “The W3C Markup Validation Service.” The W3C Markup Validation Service, validator.w3.org. Accessed 3 Feb. 2023.

* [2] “Free Images : Silhouette, Basketball, Activity, Athletic, Ball, Championship, Competition, Cover, Dunk, Game, Hoop, Jump, Man, Match, Practice, Strong, Skill, Slam, Sport, Tournament, Footwear, Joint, Standing, Black and White, Shoe, Knee, Arm, Recreation, Line, Jumping, Hand, Human Behavior, Physical Exercise, Sports 3841x2400 - Mohamed Hassan - 1451117 - Free Stock Photos - PxHere.” Free Images : Silhouette, Basketball, Activity, Athletic, Ball, Championship, Competition, Cover, Dunk, Game, Hoop, Jump, Man, Match, Practice, Strong, Skill, Slam, Sport, Tournament, Footwear, Joint, Standing, Black and White, Shoe, Knee, Arm, Recreation, Line, Jumping, Hand, Human Behavior, Physical Exercise, Sports 3841x2400 - Mohamed Hassan - 1451117 - Free Stock Photos - PxHere, pxhere.com/en/photo/1451117.

* [3] “Free Images : Nfl, National, Football, League, Logo, Icon, Sport, America, Silhouette, Clipart, Classic, Design, Doodle, Editable, Isolated, Official, Style, American, Footwear, Joint, Male, Standing, Shoe, Hand, Line, Black and White, Font, Recreation, Human Behavior, Graphics, Sports Equipment 2287x2287 - Mohamed Hassan - 1447947 - Free Stock Photos - PxHere.” Free Images : Nfl, National, Football, League, Logo, Icon, Sport, America, Silhouette, Clipart, Classic, Design, Doodle, Editable, Isolated, Official, Style, American, Footwear, Joint, Male, Standing, Shoe, Hand, Line, Black and White, Font, Recreation, Human Behavior, Graphics, Sports Equipment 2287x2287 - Mohamed Hassan - 1447947 - Free Stock Photos - PxHere, pxhere.com/en/photo/1447947.

* [4] “File:Team icon.png - Wikimedia Commons.” File:Team icon.png - Wikimedia Commons, 14 Apr. 2020, commons.wikimedia.org/wiki/File:Team_icon.png.

* [5] “Tournament Free Icons Designed by Konkapp.” Flaticon, www.flaticon.com/free-icon/tournament_3363497.

* [6] “Treadmill Free Icons Designed by Maan Icons.” Flaticon, www.flaticon.com/free-icon/treadmill_8965811.

* [7] “Swimming Pool Free Icons Designed by Good Ware.” Flaticon, www.flaticon.com/free-icon/swimming-pool_686943.

* [8] “Weights Free Icons Designed by Kosonicon.” Flaticon, www.flaticon.com/free-icon/weights_2871284.

* [9] “Court Free Icons Designed by Smashicons.” Flaticon, www.flaticon.com/free-icon/court_3136345.

* [10] “Running Track Free Icons Designed by Good Ware.” Flaticon, www.flaticon.com/free-icon/running-track_2151488.

* [11] “Dance Free Icons Designed by Mayor Icons.” Flaticon, www.flaticon.com/free-icon/dance_9169463.

* [12] “Swimming Pool Free Icons Designed by Freepik.” Flaticon, www.flaticon.com/free-icon/swimming-pool_6348605.