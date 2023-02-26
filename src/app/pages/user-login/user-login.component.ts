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
    var email=this.loginForm.get("email")?.value
    var password=this.loginForm.get("password")?.value
    if(email==''|| password==''||email==null||password==null)
    {
      alert("enter right credentials")
    }
    else
    {
    this.router.navigateByUrl('/success')
    }
}

}
