import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private myClient:HttpClient) { }

  private Url_DB="https://localhost:7248/api/Orders";

  getOrderByUser(id:number){
    return this.myClient.get(this.Url_DB+"/"+id)
  }
}
