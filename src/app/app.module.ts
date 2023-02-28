import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './share/navbar/navbar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './component/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule,Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { FooterComponent } from './share/footer/footer.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ClinicComponent } from './component/clinic/clinic.component';
import { PetDetailsComponent } from './component/pet-details/pet-details.component';
import { AddProductComponent } from './component/add-product/add-product.component';
// var route:Routes = [{path:"home",component:HomeComponent},
// {path:"profile",component:ProfileComponent},
// {path:"productDetails",component:ProductDetailsComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductDetailsComponent,
    PaymentComponent,
    ClinicComponent,
    PetDetailsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { 
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}

