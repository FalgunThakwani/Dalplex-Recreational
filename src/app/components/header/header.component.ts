import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('/login')
  }
  
  register(){
    this.router.navigateByUrl('/register')
  }

  logout() {
    this.userService.logout().subscribe((data) => {
      this.router.navigate(['/landing']);
    });
  }
}
