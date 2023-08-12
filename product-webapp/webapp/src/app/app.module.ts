import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationComponent } from './registration/registration.component';
import { MycartComponent } from './mycart/mycart.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SellerComponent } from './seller/seller.component';
import { EditProductDialogComponent } from './seller/edit-product-dialog/edit-product-dialog.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SellerComponent,
    CustomerDashboardComponent,
    EditProductDialogComponent,
    UserProfileComponent,
    MycartComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
