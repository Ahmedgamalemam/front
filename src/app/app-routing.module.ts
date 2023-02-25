import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';

const route: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'EditProfile',component:EditProfileComponent},
{ path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
