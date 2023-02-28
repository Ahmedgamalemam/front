import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

constructor(private myClient:HttpClient) { }
private Url_DB="https://localhost:7248/api/Pet";


getpets(){
  return this.myClient.get(this.Url_DB);
}
}
