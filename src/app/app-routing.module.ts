import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ClinicComponent } from './component/clinic/clinic.component';

const route: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:"profile",component:ProfileComponent},
{path:"productDetails",component:ProductDetailsComponent},
{path:"payment",component:PaymentComponent},
{path:"clinic",component:ClinicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
