import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Emailerror=false;
  Passworderror=false;
  form= new FormGroup({
    Email:new FormControl(null,[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]),
    Password:new FormControl(null,Validators.required)
  })
  constructor(public nav:NavBarService,public route:Router){}
  ngOnInit(){
    this.nav.hide();
    console.log(this.form)
  }

  Login(){
      this.route.navigate(["/home"])
  }
}
