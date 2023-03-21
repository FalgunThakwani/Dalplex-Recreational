import { UserService } from './../../services/user.service';
import { CoreService } from './../../services/core.service';
import { CategoryService } from './../../services/category.service';
import { AddCourtDialogComponent } from '../add-court-dialog/add-court-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourtDetails } from 'src/app/interfaces/CourtDetails';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sports-category-detail',
  templateUrl: './sports-category-detail.component.html',
  styleUrls: ['./sports-category-detail.component.css']
})
export class SportsCategoryDetailComponent implements OnInit {

  courtDetails!: CourtDetails[];
  currentUserRole!: string;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private categoryService: CategoryService, private coreService: CoreService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUserRole = localStorage.getItem('role') || '';
    this.coreService.updateMenuItems(["facilities", "tournament", "aboutus"], true);
    this.route.paramMap.subscribe((params: ParamMap) => {
      const name: any = params.get('name');
      this.categoryService.getAllCourtsByName(name).subscribe((data) => {
        this.courtDetails = data;
      })
    });
  }

  showAddCourtDialog() {
    const dialogRef = this.dialog.open(AddCourtDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        console.log(result);
        this.courtDetails.push({id: '4', court: result.courtnumber, name: result.name, description: result.description, price: result.price});
      }
    });
  }

}
