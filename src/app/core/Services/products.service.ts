import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myProducts:HttpClient) { }
  private url="https://localhost:7248/api/products";

  getProducts(){
   return this.myProducts.get(this.url);
  }

}
