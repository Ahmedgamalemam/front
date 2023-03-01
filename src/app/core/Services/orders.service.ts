import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private myOrders:HttpClient) { }
  private url="https://localhost:7248/api/Orders";

  getOrders(){
   return this.myOrders.get(this.url);
  }

}
