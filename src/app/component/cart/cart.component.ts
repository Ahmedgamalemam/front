import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products = new Array();
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  ngOnInit() {
    this.search.hide()
  }

  constructor(private SharedService:PetSService,public search:SearchService) {

    this.products=this.SharedService.getItem();
  }
  counter_plus(count:any){
    var name = this.products.filter(meal=>meal.name.includes(count))
    var counter = name.filter(meal=>meal.quantity++)
    // if(name.some(s=>s.quantity == 10) == true){
    //   name.some(s=>s.quantity == 10)
    //   }
   }
   counter_mins(count:any){
    var name = this.products.filter(item=>item.name.includes(count))
    var counter = name.filter(item=>item.quantity--)

    if(name.some(s=>s.quantity>0) == false){
    //  this.products = this.products.filter(f=>f.quantity>0)
    var i = 0;
    while (i < this.products.length) {
      console.log(this.products[i])
      console.log(count)

      if (this.products[i].name == count) {
        this.products.splice(i, 1);
        console.log(this.products[i])
      } else {
        ++i;
      }
    }
    }
   }
   buy_now() {
    var i = 0;
    var total_price = 0;
    while (i < this.products.length) {
      total_price =
        total_price + this.products[i].price * this.products[i].quantity;
      ++i;
    }
    this.SharedService.setbuy_now(this.products);
    this.SharedService.settotal_price(total_price);
  }
}
