import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';


const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'EditProfile', component: EditProfileComponent },
  { path: "profile", component: ProfileComponent },
  { path: "Aboutus", component: AboutUsComponent },
  { path: "ChangePassword", component: ChangePasswordComponent },
  { path: "Contactus", component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
