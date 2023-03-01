import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clinic } from '../models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private myclient:HttpClient) { }
  private Url_DB="https://localhost:7248/api/Clinics";

  public getAll(){
    return this.myclient.get(this.Url_DB);
  }

}
