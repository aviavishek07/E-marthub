import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellerComponent } from './seller/seller.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { customerDashboard } from './customer/customer-dashboard.component';
import {MycartComponent} from './mycart/mycart.component'


const routes: Routes = [
  {path:'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'sellerDashboard', component: SellerComponent},
    {path: 'userProfile', component: UserProfileComponent},
    {path: 'customerDashboard', component: CustomerDashboardComponent},
    {path: 'mycart', component: MycartComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
