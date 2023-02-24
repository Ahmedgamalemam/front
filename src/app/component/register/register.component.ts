import { Component } from '@angular/core';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public nav:NavBarService){}
  ngOnInit(){
    this.nav.hide();
  }

}
