import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Register2Component } from './component/register2/register2.component';
import { ProfileComponent } from './component/profile/profile.component';

const route: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'Login',component:LoginComponent},
{path:'Register',component:RegisterComponent},
{path:"SignUp",component:Register2Component},
{path:"Profile",component:ProfileComponent},
{path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
