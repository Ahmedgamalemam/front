import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Register2Component } from './component/register2/register2.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MapComponent } from './component/map/map.component';
import { PetsComponent } from './component/pets/pets.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { FavouritComponent } from './component/favourit/favourit.component';
import { OredrsComponent } from './component/oredrs/oredrs.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ClinicComponent } from './component/clinic/clinic.component';
import { PetDetailsComponent } from './component/pet-details/pet-details.component';
import { ErrorComponent } from './component/error/error.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AddPetComponent } from './component/add-pet/add-pet.component';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { EditPetComponent } from './component/edit-pet/edit-pet.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PetDashComponent } from './component/pet-dash/pet-dash.component';
import { ProductDashComponent } from './component/product-dash/product-dash.component';
const route: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:"SignUp",component:Register2Component},
  {path:"Profile/:id",component:ProfileComponent},
  {path:"Map",component:MapComponent},
  {path:"Map/:id",component:MapComponent},
  {path:"Pets",component:PetsComponent},
  {path:"Products",component:ProductsComponent},
  {path:'Favourit',component:FavouritComponent},
  {path:'Cart',component:CartComponent},
  {path:'orders',component:OredrsComponent},
  {path:"productDetails/:id",component:ProductDetailsComponent},
  {path:"payment",component:PaymentComponent},
  {path:"Clinic",component:ClinicComponent},
  { path:'EditProfile', component: EditProfileComponent },
  { path:"Aboutus", component: AboutUsComponent },
  {path:"PetDetails/:id",component:PetDetailsComponent},
  {path:"ChangePassword",component:ChangePasswordComponent},
  {path:"ContactUs",component:ContactUsComponent},
  {path:"AddProduct",component:AddProductComponent},
  {path:"AddPet",component:AddPetComponent},
  {path:"EditPet/:id",component:EditPetComponent},
  {path:"EditProduct/:id",component:EditProductComponent},
  {path:"Dashboard",component:DashboardComponent},
  {path:"AdminPet",component:PetDashComponent},
  {path:"AdminProduct",component:ProductDashComponent},

  {path:'**',component:ErrorComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

