import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  visable: boolean;
  search: string = '';
  constructor() {
    this.visable = true;
  }
  hide() {
    this.visable = false;
  }
  Show() {
    this.visable = true;
  }

  setsearch(Item: any): void {
    this.search = Item;
    //console.log(Item)
  }
  getsearch(): any {
    return this.search;
  }
}
