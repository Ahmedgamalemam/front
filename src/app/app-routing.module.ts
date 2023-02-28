import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ClinicComponent } from './component/clinic/clinic.component';
import { PetDetailsComponent } from './component/pet-details/pet-details.component';
import { AddProductComponent } from './component/add-product/add-product.component';

const route: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:"profile",component:ProfileComponent},
{path:"productDetails",component:ProductDetailsComponent},
{path:"payment",component:PaymentComponent},
{path:"clinic",component:ClinicComponent},
{path:"pet-details",component:PetDetailsComponent},
{path:"addProduct",component:AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
