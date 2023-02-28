import { Component,HostListener } from '@angular/core';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
id!:number;
constructor(public nav:NavBarService,public search:SearchService) {
console.log(localStorage.getItem("id"))
}
ngDoCheck(){
  this.id=Number(localStorage.getItem("id"))
}

  sidebar(){
  document.getElementById("side")?.classList.toggle("show-side")
  }
  close(){
    document.getElementById("side")?.classList.toggle("show-side")
  }

  LogOut(){
    localStorage.clear();
  }
}
