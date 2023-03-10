import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private myclient:HttpClient) { }
  private Url_DB="https://localhost:7248/api/Clinics";

  public getAll(){
    return this.myclient.get(this.Url_DB);
  }
  
  public delete(item:any){
    return this.myclient.delete(this.Url_DB+"/"+item)
  }

}
