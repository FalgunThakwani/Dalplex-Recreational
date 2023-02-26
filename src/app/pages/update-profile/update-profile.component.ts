import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/interfaces/UserProfile';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  profileForm!: FormGroup;
  userProfile!: UserProfile;

  constructor(private formBulder: FormBuilder, private coreService: CoreService) { }

  ngOnInit(): void {
    this.profileForm = this.formBulder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      lastname: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      email: ['', Validators.email],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      about: ['', [Validators.required]],
      sex: ['', [Validators.required]]
    });

    this.profileForm.disable();

    //patch test data
    this.profileForm.patchValue({
      firstname: 'Rob',
      lastname: 'Randle',
      email: 'test@dal.ca',
      phone: '782-881-2121',
      address: '1079 Queen St. Halifax, NS',
      dob: '1997-11-10',
      about: 'Hello World!',
      sex: 'male'
    });
  }

  onEdit() {
    this.profileForm.enable();
  }

  onSubmit() {
    this.profileForm.disable();
    //after successfull submission
    this.coreService.showSnackBar("Profile updated successfully", "ok");
  }

}
