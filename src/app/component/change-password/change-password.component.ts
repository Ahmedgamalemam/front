import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { AlertService } from 'src/app/core/Services/alert.service';
import { UserService } from 'src/app/core/Services/ModelServices/user.service';
import { PasswordValidators } from './password.validators';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  Profile!:User;
  id!:number;
  user!:User;


  constructor(private myService:UserService,private fb:FormBuilder,private route :Router,private alertify: AlertService) {
    this.id=Number(localStorage.getItem("id"));
   myService.GetUserById(this.id).subscribe(
  (responce:any)=>{
    this.Profile=responce
    console.log(responce)
  })
  }

  form = this.fb.group({
    oldPassword:new FormControl(null,Validators.required),
    newPassword: new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{5,}$")]),
    confirmPassword: new FormControl(null,Validators.required)
  },{validators:this.passwordMatchingValidatior})
  passwordMatchingValidatior(fg: FormGroup): Validators{
    return fg.get('confirmPassword')?.value === fg.get('newPassword')?.value ? Validators.nullValidator :{notmatched: true};
  }
  get newPassword() { return this.form.get('newPassword') as FormControl }
  get oldPassword() { return this.form.get('oldPassword') as FormControl }
  get confirmPassword() { return this.form.get('confirmPassword') as FormControl }

  userData(): User {
    return this.user = {
      id:this.Profile.id,
      fname:this.Profile.fname,
      lname:this.Profile.lname,
      type:"user",
      age:this.Profile.age,
      city:this.Profile.city,
      area:this.Profile.area,
      buildingID:this.Profile.buildingID,
      image:this.Profile.image,
      phone:this.Profile.phone,
      email:this.Profile.email,
      password:this.newPassword.value
    }
  }
  ChangePassword() {
    if(this.oldPassword.value==this.Profile.password)
    {
    this.myService.EditProfile(this.userData(),this.Profile.id).subscribe((res:any)=>console.log(res))
    this.route.navigate(['/Profile/'+this.id]);
    this.alertify.success("You Changed Your Password Successfully")
    }else{
      this.alertify.error("Your Old Password is not Correct");
    }
  }
}
