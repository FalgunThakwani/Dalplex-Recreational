import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  PasswordResetForm!: FormGroup;
  hide: boolean =true;
  newPassword!: String;
  confirmPassword!: String;

  constructor(private router:Router,private service:CoreService) { }

  ngOnInit(): void {
    this.PasswordResetForm=new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      newPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }
onResetPassword(){
  this.service.showSnackBar("password reset successful","password reset successful")
}
}
