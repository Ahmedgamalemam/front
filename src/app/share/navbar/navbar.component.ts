import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  sidebar(){
  document.getElementById("side")?.classList.toggle("show-side")
  }
  close(){
    document.getElementById("side")?.classList.toggle("show-side")
  }
}
