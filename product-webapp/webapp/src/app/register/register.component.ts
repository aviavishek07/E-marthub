import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../model/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  saveForm: FormGroup;
  roles = Object.values(Role);

  constructor(private formBuilder: FormBuilder, private router: Router){
    this.saveForm = this.formBuilder.group({
      firstName:['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern("[a-zA-Z][a-zA-Z]+")])],
      lastName:['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern("[a-zA-Z][a-zA-Z]+")])],
      mailId:['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-zA-Z][a-zA-Z]+')]],
      password:['', Validators.required],
      mobileNo:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}")]],
      role:[null, Validators.required]
    })

  }


  registerUser(saveForm: FormGroup){
    console.log(saveForm.value);
  }


}
