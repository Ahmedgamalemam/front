import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Pets } from '../models/pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private myclient : HttpClient) { }
  private Url_DB="https://localhost:7248/api/Users";
}
