import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  visable:boolean;
  constructor() {
    this.visable=true;
  }
  hide(){
    this.visable=false;
  }
  Show(){
    this.visable=true
  }
}
