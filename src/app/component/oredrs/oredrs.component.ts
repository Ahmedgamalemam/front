import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';

@Component({
  selector: 'app-oredrs',
  templateUrl: './oredrs.component.html',
  styleUrls: ['./oredrs.component.css']
})
export class OredrsComponent {
  products =new Array();

  constructor(private SharedService:PetSService) {
    
    // this.products=this.SharedService.getItem();
    this.products = [{Name:'Marvelous Spatuletail',Image:"assets/images/cardcat.png",dates:"10/2021",discription:"beautiful pets", Price:"200$" ,Counter:1 },
    {Name:' Spatuletail',Image:"assets/images/cardcat.png",dates:"8/2021",discription:"beautiful pets", Price:"200$" ,Counter:1 },
    {Name:' Spatuletail',Image:"assets/images/cardcat.png",dates:"12/2021",discription:"beautiful pets", Price:"200$" ,Counter:1 }]
  }

  removefromcard(element:any){
    var remove = this.products.indexOf(element)
    this.products.splice(remove, 1); 
   }
}
