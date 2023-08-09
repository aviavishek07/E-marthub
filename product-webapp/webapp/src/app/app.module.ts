import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationComponent } from './registration/registration.component';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycartComponent } from './mycart/mycart.component';

>>>>>>> d041b191605a8539258fba7f79e21efce9702d85

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SellerComponent } from './seller/seller.component';
import { EditProductDialogComponent } from './seller/edit-product-dialog/edit-product-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent
    HomeComponent,
    BodyComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationComponent,
    SellerComponent,
    EditProductDialogComponent
=======
    MycartComponent,
    
    
>>>>>>> d041b191605a8539258fba7f79e21efce9702d85
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    SlickCarouselModule
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule
=======
   
FormsModule,
ReactiveFormsModule
>>>>>>> d041b191605a8539258fba7f79e21efce9702d85
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
