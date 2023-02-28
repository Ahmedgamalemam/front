import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private myclient:HttpClient) { }
  private URL_DB = "http://localhost:4200/api/Users/{id}"
  
}
