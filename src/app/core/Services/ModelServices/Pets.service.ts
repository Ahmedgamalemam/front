import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';
import { Pets } from '../../models/Pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

constructor(private myClient:HttpClient) { }
private Url_DB="https://localhost:7248/api/Pet";


getpets(){
  return this.myClient.get(this.Url_DB);
}
getPetByID(id:number){
  return this.myClient.get(this.Url_DB+"/"+id);
}
postPets(pet:Pets){
  return this.myClient.post(this.Url_DB,pet);
}
deletePets(pet:Pets){
  return this.myClient.delete(this.Url_DB)
}
}
