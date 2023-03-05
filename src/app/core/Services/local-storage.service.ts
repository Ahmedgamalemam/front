import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  Carts: any = new Array();
  Favourits: any = new Array();
}
