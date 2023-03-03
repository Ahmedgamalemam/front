import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  visable: boolean;
  search: string = '';
  searchCatogry:string='';
  searchByID: string = '';
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
    //console.log("Sh",Item)
  }
  getsearch(): any {
    return this.search;
  }
  setsearchByCatogry(Item: any): void {
    this.searchCatogry = Item;
    //console.log("nh",Item)
  }
  getsearchBYCatogry(): any {
    return this.searchCatogry;

  }
  setsearchByID(Item: any): void {
    this.searchByID = Item;
    //console.log("nh",Item)
  }
  getsearchBYID(): any {
    return this.searchByID;

  }
}
