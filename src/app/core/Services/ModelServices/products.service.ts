import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myProducts:HttpClient) { }
  private url="https://localhost:7248/api/products";

  getProducts(){
   return this.myProducts.get(this.url);
  }
  public GetProductByID(ID:number){
    return this.myProducts.get(this.url+"/"+ID);
  }
  AddProduct(Product:Product){
    return this.myProducts.post(this.url,Product)
  }
  EditProduct(product:Product,id:number){
    return this.myProducts.put(this.url+"?id="+id,product);
  }
  DeleteProduct(id:number){
    return this.myProducts.delete(this.url+"/"+id)
  }
}
