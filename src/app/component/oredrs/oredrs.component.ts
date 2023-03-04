import { Component } from '@angular/core';
import { Orders } from 'src/app/core/models/orders';
import { PetSService } from 'src/app/core/pet-s.service';
import { OrderService } from 'src/app/core/Services/ModelServices/Order.service';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-oredrs',
  templateUrl: './oredrs.component.html',
  styleUrls: ['./oredrs.component.css']
})
export class OredrsComponent {
  id!:number;
  Orders:Orders[]=[];
  Length:number=0;
  ngOnInit() {
    this.search.hide()
    this.Length=this.Orders.length

  }

  ngDoCheck(){
    this.id=Number(localStorage.getItem("id"))
  }
  constructor(private SharedService:PetSService,public search:SearchService,Services:OrderService) {
    this.id=Number(localStorage.getItem("id"))

    Services.getOrderByUser(this.id).subscribe((responce:any)=>{
      responce.forEach((element:any) => {
        this.Orders.push(element);
        this.Length=this.Length+1;
        console.log(element)

      });
    })
    console.log(this.Length)

    // this.products=this.SharedService.getItem();
    // this.products = [{Name:'Marvelous Spatuletail',Image:"assets/images/cardcat.png",dates:"10/2021",discription:"beautiful pets", Price:"200$" ,Counter:1 },
    // {Name:' Spatuletail',Image:"assets/images/cardcat.png",dates:"8/2021",discription:"beautiful pets", Price:"200$" ,Counter:1 },
    // {Name:' Spatuletail',Image:"assets/images/cardcat.png",dates:"12/2021",discription:"beautiful pets", Price:"200$" ,Counter:1 }]


  }

  // removefromcard(element:any){
  //   var remove = this.products.indexOf(element)
  //   this.products.splice(remove, 1);
  //  }
}
