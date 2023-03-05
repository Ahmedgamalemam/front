import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AlertService } from 'src/app/core/Services/alert.service';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { PasswordIconService } from 'src/app/core/Services/password-icon.service';
import { UserService } from 'src/app/core/Services/ModelServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = new FormGroup({
    Password: new FormControl(null, Validators.required),
    Email: new FormControl(null, [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.required,
    ]),
  });
  constructor(
    public nav: NavBarService,
    public route: Router,
    private userService: UserService,
    private alertify: AlertService,
    public PassIcon: PasswordIconService
  ) {}
  ngOnInit() {
    this.nav.hide();
  }
  get Password() {
    return this.form.get('Password') as FormControl;
  }
  get Email() {
    return this.form.get('Email') as FormControl;
  }

  Login() {
    console.log(this.form.value);
    this.userService.LoginCheck(this.Password.value,this.Email.value).subscribe(
       (response: any) => {
        console.log(response)

    if(response!=null){
      localStorage.setItem("id",response.id)
      localStorage.setItem("Type",response.type)
      console.log(response)
      this.route.navigate(["/home"])
      this.alertify.success('Congrats, you are successfully Logged In');

    }
    else
    {
      this.alertify.error('Please enter valid Email and Password');
    }
    });
  }
  getIcon() {
    this.PassIcon.Show();
  }
  disableIcon() {
    this.PassIcon.hide();
  }
}
