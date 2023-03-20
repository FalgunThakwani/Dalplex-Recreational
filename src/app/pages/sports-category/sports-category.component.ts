import { UserService } from './../../services/user.service';
import { CoreService } from './../../services/core.service';
import { CategoryService } from './../../services/category.service';
import { AddCategoryDialogComponent } from './../add-category-dialog/add-category-dialog.component';
import { Component, OnInit } from '@angular/core';
import { SportsCategory } from 'src/app/interfaces/SportsCategory';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sports-category',
  templateUrl: './sports-category.component.html',
  styleUrls: ['./sports-category.component.css']
})
export class SportsCategoryComponent implements OnInit {

  sportsCategoryDetails!: SportsCategory[];
  currentUserRole!: string;
  
  constructor(private dialog: MatDialog, private categoryService: CategoryService, private coreService: CoreService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUserRole = this.userService.getCurrentUserRole();
    this.coreService.updateMenuItems(["facilities", "tournament", "aboutus"], true);
    this.categoryService.getAllSportsCategory().subscribe((data) => {
      this.sportsCategoryDetails = data;
    });
  }

  showAddCategoryDialog() {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        console.log(result);
        //TODO? add assets for entered category
        const newCategory : SportsCategory = {id: 7, name: result.categoryname, thumbnail: 'assets/aquatics.png'};
        this.sportsCategoryDetails.push(newCategory);
      }
    });
  }
  

}
