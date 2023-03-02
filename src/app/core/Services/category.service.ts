import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private myClient:HttpClient) { }

  private Url_DB="https://localhost:7248/api/Catagory";
  
  public get_category(){
    return this.myClient.get(this.Url_DB);
  }

}
