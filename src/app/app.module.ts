import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ErrorComponent } from './component/error/error.component';
import { Register2Component } from './component/register2/register2.component';

import { MarkerService } from './core/Services/marker.service';
import { PopupService } from './core/Services/popup.service';

import { FooterComponent } from './share/footer/footer.component';
import { MapComponent } from './component/map/map.component';
import { PetsComponent } from './component/pets/pets.component';
import { ProductsComponent } from './products/products.component';
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
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    ReactiveFormsModule

  ],
  providers: [
    MarkerService,
    PopupService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}

