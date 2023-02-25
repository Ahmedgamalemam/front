import { Component } from '@angular/core';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public nav:NavBarService){
  }
  ngOnInit(){
    this.nav.Show();
  }

}
