import { OtpService } from './../../services/otp.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  PasswordResetForm!: FormGroup;
  hide: boolean = true;
  newPassword!: String;
  confirmPassword!: String;

  constructor(private router: Router, private service: CoreService, private otpService: OtpService) { }

  ngOnInit(): void {
    this.PasswordResetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      otp: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  onResetPassword() {
    if (this.PasswordResetForm.value.newPassword == this.PasswordResetForm.value.confirmPassword &&
      this.PasswordResetForm.value.newPassword != '' && this.PasswordResetForm.value.confirmPassword != '') {
      this.service.showSnackBar("password reset successful", "password reset successful")
      this.router.navigateByUrl('/login')
    }
  }

  requestOtp() {
    const email = this.PasswordResetForm.value.email;
    console.log(email);
    this.otpService.createOTP({email: email}).subscribe((data: any) => {
      this.service.showSnackBar("OTP Emailed Successfully!");
    });
  }
}
