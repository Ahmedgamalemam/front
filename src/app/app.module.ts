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
var route:Routes = [{path:"home",component:HomeComponent},
{path:"profile",component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    RouterModule.forRoot(route)
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

