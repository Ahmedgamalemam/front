import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private Item: any;

  constructor() { }


  setItem(Item: any): void {
    this.Item = Item;
  }

  getItem(): any {
    return this.Item;
  }

}
