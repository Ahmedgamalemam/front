import { Component } from '@angular/core';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public nav:NavBarService){

  }
  ngOnInit(){
    this.nav.hide();
  }
}
