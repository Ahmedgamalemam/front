import { Component,HostListener } from '@angular/core';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(public nav:NavBarService) {

}

  sidebar(){
  document.getElementById("side")?.classList.toggle("show-side")
  }
  close(){
    document.getElementById("side")?.classList.toggle("show-side")
  }
}
