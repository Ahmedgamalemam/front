import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-favourit',
  templateUrl: './favourit.component.html',
  styleUrls: ['./favourit.component.css']
})
export class FavouritComponent {

  products =new Array();

  ngOnInit() {
    this.search.hide()
  }


  constructor(private SharedService:PetSService,public search:SearchService) {

    // this.products=this.SharedService.getItem();
    this.products = this.SharedService.getfav()
  }
  removefromfavourit(element:any){
      var i = 0;
      while (i < this.products.length) {
        console.log(this.products[i])
        console.log(element)
  
        if (this.products[i].name == element) {
          this.products.splice(i, 1);
          console.log(this.products[i])
        } else {
          ++i;
        }
      }
      }
   }

