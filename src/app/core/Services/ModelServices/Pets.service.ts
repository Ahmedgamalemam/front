import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';
import { Pets } from '../../models/pets';


@Injectable({
  providedIn: 'root'
})
export class PetsService {

constructor(private myClient:HttpClient) { }
private Url_DB="https://localhost:7248/api/Pet";


public getpets(){
  return this.myClient.get(this.Url_DB);
}
getPetByID(id:number){
  return this.myClient.get(this.Url_DB+"/"+id);
}
postPets(pet:Pets){
  return this.myClient.post(this.Url_DB,pet);
}
EditPet(pet:Pets,id:number){
  return this.myClient.put(this.Url_DB+"?id="+id,pet);
}
DeleteProduct(id:number){
  return this.myClient.delete(this.Url_DB+"?id="+id)
}
}
