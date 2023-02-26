import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetSService {

  private Item = new Array();
  constructor() { }

  setItem(Item: any): void {
    var name = this.Item.some(meal=>meal.Name ==Item.Name)
    if(name == false){
      this.Item.push(Item);
    }
  }

  getItem(): any {
    return this.Item;
  }
}
