import { Component } from '@angular/core';
import { Pets } from 'src/app/core/models/pets';
import { Product } from 'src/app/core/models/product';
import { User } from 'src/app/core/models/User';
import { PetsService } from 'src/app/core/Services/ModelServices/Pets.service';
import { ProductsService } from 'src/app/core/Services/ModelServices/products.service';
import { UserService } from 'src/app/core/Services/ModelServices/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
admins:User[]=[];
Products: Product[] = [];
pets: Pets[] = [];
countUsers:any;
countProducts:any;
countPets:any;
constructor(public myservice:UserService,public petService:PetsService,public productService:ProductsService){
  this.countUsers=0;
  myservice.getAll().subscribe(
    (ad:any)=>{
      ad.forEach((element:User) => {
        if(element.type == "Admin"){
          this.admins.push(element)
        }
        this.countUsers ++;
        // console.log(count);
        
      });
      this.countProducts=0;
      this.productService.getProducts().subscribe((responce: any) => {
        responce.forEach((element: any) => {
          this.Products.push(element);
          this.countProducts ++;
        });
        this.countPets=0
        this.petService.getpets().subscribe((response: any) => {
          response.forEach((element: Pets) => {
            this.pets.push(element);
            this.countPets ++;
          }
          )
          });
      });
    }
  )
  
}

}

