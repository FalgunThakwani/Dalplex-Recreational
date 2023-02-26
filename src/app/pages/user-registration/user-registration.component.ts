import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public registrationForm!: FormGroup;
  public name!:string
  public lastName!:string
  public userDetails: any;

  constructor(private router: Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup(
      {
        firstname : new FormControl('',[Validators.pattern('^([A-Za-z]*)$'), Validators.required]),
        lastname : new FormControl('',[Validators.pattern('^([A-Za-z]*)$'), Validators.required]),
        password: new FormControl('',[Validators.required,Validators.minLength(8)]),
        confirmpassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
        email: new FormControl('',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),Validators.required,Validators.email]),
      },
    )
  }

  onRegister(){
    if(this.registrationForm.value.password==this.registrationForm.value.confirmpassword)
    {
    this.name=this.registrationForm.value.firstname
    console.log(this.name)
    this.userDetails=this.formBuilder.group(
      {'firstname': this.registrationForm.value.firstname,
       'lastname': this.registrationForm.value.lastname,
       'email': this.registrationForm.value.email
      }
    )
    this.router.navigateByUrl('/login')
  }
}

}
