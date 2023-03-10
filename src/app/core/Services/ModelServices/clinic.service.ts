import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clinic } from '../../models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private myclient:HttpClient) { }
  private Url_DB="https://localhost:7248/api/Clinics";

  public getAll(){
    return this.myclient.get(this.Url_DB);
  }
  public getByID(ID:number){
    return this.myclient.get(this.Url_DB+"/"+ID);
  }
  public delete(item:any){
    return this.myclient.delete(this.Url_DB+"/"+item)
  }
  AddClinic(clinic:Clinic){
    return this.myclient.post(this.Url_DB,clinic);
  }

}
