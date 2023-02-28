import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetSService {

  private Item = new Array();
  private petcategory:string = ""
  private productcategory:string = ""
  private search:string = ""
  constructor() { }

  setItem(Item: any): void {
    var name = this.Item.some(i=>i.Name ==Item.Name)
    if(name == false){
      this.Item.push(Item);
    }
  }
  getItem(): any {
    return this.Item;
  }

  setpet(Item: any): void {
      this.petcategory=Item;
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
  }
