import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {id: 1, name: 'Log In', displayName: 'Log In', route: '/login', show: true},
    {id: 2, name: 'Sign Up', displayName: 'Sign Up', route: '/register', show: true},
    {id: 3, name: 'Facilities', displayName: 'Facilities', route: '/facilities', show: true},
    {id: 4, name: 'Tournament', displayName: 'Tournament', route: '/tournament', show: true},
    {id: 5, name: 'About us', displayName: 'About us', route: '/about', show: true}
  ];

  constructor(private router:Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout().subscribe((data) => {
      this.router.navigate(['/landing']);
    });
  }
}
