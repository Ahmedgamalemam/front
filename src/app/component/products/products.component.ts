import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products=new Array();
  constructor(private service:PetSService){
    let product = this.service.getproduct()
   this.products.filter((pro:any) => pro.category.toLowerCase().includes(product.toLowerCase())) ;
  }
  Addtocart()
  {
  //  this.pets.setItem();
  }

  // get_pet_category(){
  // 
  // }
  // search_category(){
  //   let product = this.product.getproduct()
  //   this.products.filter((pro:any) => pro.category.toLowerCase().includes(product.toLowerCase())) ;
  // }

}
