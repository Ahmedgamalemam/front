import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products =new Array();

  constructor(private SharedService:PetSService) {
    
    // this.products=this.SharedService.getItem();
    this.products = [{Name:'Marvelous Spatuletail',Image:"assets/images/cardcat.png",discription:"beautiful pets", Price:"200$" ,Counter:1 },{Name:'Marvelous Spatuletail',Image:"assets/images/cardcat.png",discription:"beautiful pets", Price:"200$" ,Counter:1 }]
  }

  counter_plus(count:any){
    var name = this.products.filter(meal=>meal.Name.includes(count))
    var counter = name.filter(meal=>meal.Counter++)
   }
   counter_mins(count:any){
    var name = this.products.filter(meal=>meal.Name.includes(count))
    var counter = name.filter(meal=>meal.Counter--)
    if(name.some(s=>s.Counter>0) == false){
     this.products = this.products.filter(f=>f.Counter>0)
    }
   }
}
