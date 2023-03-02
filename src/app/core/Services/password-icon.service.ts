import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordIconService {

  visable:boolean;
  convisable:boolean;
  constructor() {
    this.visable=true;
    this.convisable=true
  }
  hide(){
    this.visable=false;
  }
  Show(){
    this.visable=true
  }
  Conhide(){
    this.convisable=false
  }
  Conshow(){
    this.convisable=true
  }
}
