import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './share/navbar/navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './component/home/home.component';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ErrorComponent } from './component/error/error.component';
import { Register2Component } from './component/register2/register2.component';
import { FavouritComponent } from './component/favourit/favourit.component';
import { CartComponent } from './component/cart/cart.component';
import { OredrsComponent } from './component/oredrs/oredrs.component';
import { RouterModule,Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { FooterComponent } from './share/footer/footer.component';
import { MapComponent } from './component/map/map.component';
import { PetsComponent } from './component/pets/pets.component';
import { ProductsComponent } from './component/products/products.component';
import { MarkerService } from './core/Services/marker.service';
import { PopupService } from './core/Services/popup.service';
import { PetDetailsComponent } from './component/pet-details/pet-details.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AddPetComponent } from './component/add-pet/add-pet.component';

import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ClinicComponent } from './component/clinic/clinic.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentComponent } from './component/payment/payment.component';
import { EditPetComponent } from './component/edit-pet/edit-pet.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';


// var route:Routes = [{path:"home",component:HomeComponent},
// {path:"profile",component:ProfileComponent},
// {path:"productDetails",component:ProductDetailsComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    Register2Component,
    FooterComponent,
    MapComponent,
    PetsComponent,
    ProductsComponent,
    FavouritComponent,
    CartComponent,
    OredrsComponent,
    FooterComponent,
    ProfileComponent,
    EditProfileComponent,
    AboutUsComponent,
    ChangePasswordComponent,
    ProductDetailsComponent,
    PaymentComponent,
    ClinicComponent,
    PetDetailsComponent,
    AddProductComponent,
    AddPetComponent,
    ClinicComponent,
    EditPetComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [
    MarkerService,
    PopupService,
    RouterModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}






