import { Component, HostListener } from '@angular/core';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
id!:number;
textsearch: string = "";
Type:any;
constructor(public nav:NavBarService,public search:SearchService,public searchservice: NavBarService,
  ) {
console.log(localStorage.getItem("id"))
}
ngDoCheck(){
  this.id=Number(localStorage.getItem("id"))
  this.Type= localStorage.getItem("Type");
}

  // sidebar(){
  // document.getElementById("side")?.classList.toggle("show-side")
  // }

  applyFilter(event: Event) {
    let inputsearch = (event.target as HTMLInputElement).value;
    this.textsearch = inputsearch;
  }
  categorysearch() {
    this.searchservice.setsearch(this.textsearch);
    //console.log(this.textsearch);
  }
  productcategory(item:Event){
    let inputsearch = (item.target as HTMLInputElement).value;
    this.searchservice.setsearchByCatogry(inputsearch);
  }
  petcategory(item:Event){
    let inputsearch = (item.target as HTMLInputElement).value;
    this.searchservice.setsearchByCatogry(inputsearch);
  }

  sidebar() {
    document.getElementById('side')?.classList.toggle('show-side');
  }
  close() {
    document.getElementById('side')?.classList.toggle('show-side');
  }

  LogOut(){
    localStorage.clear();
  }
}
