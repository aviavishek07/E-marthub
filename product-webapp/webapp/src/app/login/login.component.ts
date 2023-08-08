import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  userRole: string = ' ';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private routeService: RouteService, private route:ActivatedRoute){
    this.loginForm = this.formBuilder.group({
      mailId:['', Validators.required],
      password:['', Validators.required]
    })

  }
  ngOnInit() {
    // Get the user role from the URL parameters
    this.route.queryParams.subscribe(params => {
      this.userRole = params['role'];
    });
  }

  loginUser(loginForm: FormGroup){
    console.log(this.loginForm.value);
    this.authService.authenticateUser(this.loginForm.value).subscribe(resp => {
      const userRole = resp['role'];
      sessionStorage.setItem('bearerToken', resp['token'])
      console.log(resp['token']);
        // Redirect based on user's role
      if (userRole === 'Seller') {
      // Redirect to seller dashboard
        this.routeService.routeToSellerDashboard();
      } else if (userRole === 'Customer') {
      // Redirect to customer dashboard
        this.routeService.routeToCustomerDashboard();
      } else {
      // Handle other user roles or cases (if needed)
        alert('Unknown user role. Unable to redirect.');
      }
    }, err => {
      alert("Invalid Credentials");
    })
    
  }

}
