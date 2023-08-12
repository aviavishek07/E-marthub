import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../model/role';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import {Register} from '../model/user';
import {Address} from '../model/address';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  saveAddress: FormGroup;
  userDetails: any;
  addressList: Array<any>=[];


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.saveAddress = this.formBuilder.group({
      doorNo:['', Validators.required],
      streetName:['', Validators.required],
      cityName:['', Validators.required],
      pinCode:['', Validators.required],
      emailId:['', Validators.required]

    })

      let mailId = localStorage.getItem('mail');
      console.log(mailId);
      this.authService.getUserDetails(mailId).subscribe(resp => {
        console.log(resp);
        this.userDetails = resp;
      })


      this.authService.getAddressDetails(mailId).subscribe(resp => {
        console.log(resp);
        this.addressList = resp;
      }, err => {
        console.log('Hello'+ err)
      })


  }

  registerAddress(saveAddress: FormGroup){
    console.log(saveAddress.value);
    this.authService.addAddress(this.saveAddress.value).subscribe(resp => {
      this.saveAddress.reset();
      this.router.navigate(['/userProfile']);

    })
  }


}
