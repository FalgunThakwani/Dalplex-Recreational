import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuItems } from '../interfaces/MenuItems';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  
  menuItems: MenuItems = {
    items: [
      {id: 1, name: 'login', displayName: 'Log In', route: '/login', show: true},
      {id: 2, name: 'signup', displayName: 'Sign Up', route: '/register', show: true},
      {id: 3, name: 'facilities', displayName: 'Facilities', route: '/facilities', show: true},
      {id: 4, name: 'tournament', displayName: 'Tournament', route: '/tournaments', show: true},
      {id: 5, name: 'aboutus', displayName: 'About us', route: '/about', show: true}
    ],
    showCart: true,
    showProfile: true
  };

  constructor(private snackBar: MatSnackBar) { }

  showSnackBar(message: string, action: string = 'ok') {
    this.snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

  updateMenuItems(names: string[], showCart: boolean, showProfile: boolean = true): void {
    this.menuItems.items.forEach(item => {
      item.show = names.includes(item.name) || false;
    });
    this.menuItems.showCart = showCart;
    this.menuItems.showProfile = showProfile;
  }

  getMenuItems() : Observable<MenuItems> {
    return of(this.menuItems);
  }
  
}
