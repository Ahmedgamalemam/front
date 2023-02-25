import { Component } from '@angular/core';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component {
  constructor(public nav:NavBarService){

  }
  ngOnInit(){
    this.nav.hide();
  }
}
