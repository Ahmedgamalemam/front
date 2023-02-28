import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { AlertService } from 'src/app/core/Services/alert.service';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { PasswordIconService } from 'src/app/core/Services/password-icon.service';
import { SharedService } from 'src/app/core/Services/Shared.service';
import { UserService } from 'src/app/core/Services/ModelServices/user.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component {
  getdata:any;
  user!: User;
  constructor(public nav:NavBarService,private fb:FormBuilder,public PassIcon:PasswordIconService,public ConPassIcon:PasswordIconService,
    private userService:UserService,private data:SharedService,private alertify: AlertService,private route:Router){
      this.getdata=data.getItem();
      console.log(this.getdata)

  }
  ngOnInit(){
    this.nav.hide();
  }
  RegForm = this.fb.group({
    Email: new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}")]),
    Password: new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{5,}$")]),
    ConfirmPassword: new FormControl(null, [Validators.required]),
  },{validators:this.passwordMatchingValidatior})
  passwordMatchingValidatior(fg: FormGroup): Validators{
    return fg.get('ConfirmPassword')?.value === fg.get('Password')?.value ? Validators.nullValidator :{notmatched: true};
  }
  get confirmPassword() {
    return this.RegForm.get('ConfirmPassword') as FormControl;
  }
  get Password() {
    return this.RegForm.get('Password') as FormControl;
  }
  get Email() {
    return this.RegForm.get('Email') as FormControl;
  }

  userData(): User {
    return this.user = {
      Fname:this.getdata.Fname,
      Lname:this.getdata.Lname,
      Type:"user",
      Age:this.getdata.Age,
      Address:this.getdata.Address,
      Image:this.getdata.Image,
      Phone:this.getdata.Phone,
      Email:this.Email.value,
      Password:this.Password.value
    }
  }
  add() {
    this.userService.CheckEmails(this.Email.value).subscribe((response: any) => {
      if(response){
        this.alertify.error('Email is already Exist before')
      }else{
        this.userService.addUser(this.userData()).subscribe((data:any)=>{console.log(data)});
        this.alertify.success('Congrats, you are successfully registered');
        console.log(this.userData())
        this.route.navigate(["/Login"])
      }
    });

    }
    getIcon(){
      this.PassIcon.Show()

    }
    disableIcon(){
      this.PassIcon.hide()
    }
    getConIcon(){
      this.ConPassIcon.Conshow()
    }
    disableConIcon(){
      this.ConPassIcon.Conhide()
    }
}
