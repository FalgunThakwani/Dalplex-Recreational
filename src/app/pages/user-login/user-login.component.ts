import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  email: String;
  password: String;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        email : new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
      }
    )
  }
  onLogin(){
    if(this.email=='user123@dal.ca' && this.password=='user@123'){
    this.router.navigateByUrl('/success')
    }
}

}
