import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PetSService {
  private Item = new Array();
  private favourit = new Array();
  private petcategory: string = '';
  private productcategory: string = '';
  private search: string = '';
  private payment=new Array();
  private total_price=0;
  constructor() {}
  // add to cart
  setItem(Item: any): void {
    var name = this.Item.some((i) => i.name == Item.name);
    if (name == false) {
      this.Item.push(Item);
    }
  }
  getItem(): any {
    return this.Item;
  }

  // add to favourit
  setfav(Item: any): void {
    var name = this.Item.some((i) => i.name == Item.name);
    if (name == false) {
      this.favourit.push(Item);
    }
  }
  getfav(): any {
    return this.favourit;
  }

  setpet(Item: any): void {
    this.petcategory = Item;
  }
  getpet(): any {
    return this.petcategory;
  }

  setproduct(Item: any): void {
    this.productcategory = Item;
  }

  getproduct(): any {
    return this.productcategory;
  }
  setsearch(Item: any): void {
    this.search = Item;
  }
  getsearch(): any {
    return this.search;
  }
  // set to payment
  setbuy_now(Item: any): void {
    this.payment = Item;
  }
  getbuy_now(): any {
    return this.payment;
  }

  settotal_price(Item: any): void {
    this.total_price = Item;
  }
  gettotal_price(): any {
    return this.total_price;
  }
}
