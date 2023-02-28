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
    this.products = [{Name:'Marvelous Spatuletail',Image:"assets/images/cardcat.png",discription:"beautiful pets", Price:"200$" ,Counter:1 },
    {Name:'Marvelous Spatuletail',Image:"assets/images/cartfood.png",discription:"beautiful pets", Price:"200$" ,Counter:1 },
    {Name:'Marvelous Spatuletail',Image:"assets/images/cartdog.png",discription:"beautiful pets", Price:"200$" ,Counter:1 },
    {Name:'Marvelous Spatuletail',Image:"assets/images/cartfish.png",discription:"beautiful pets", Price:"200$" ,Counter:1 }]
  }
   removefromcard(element:any){
    var remove = this.products.indexOf(element)
    this.products.splice(remove, 1);
   }
}
