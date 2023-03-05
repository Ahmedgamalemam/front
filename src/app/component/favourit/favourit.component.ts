import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-favourit',
  templateUrl: './favourit.component.html',
  styleUrls: ['./favourit.component.css'],
})
export class FavouritComponent {
  products = new Array();
  pages=1;

  ngOnInit() {
    this.search.hide();
  }

  constructor(
    private SharedService: PetSService,
    public search: SearchService
  ) {
    // this.products=this.SharedService.getItem();
    this.products = JSON.parse(
      localStorage['Favourits'] || this.SharedService.getfav()
    );
    console.log(this.products);
  }
  removefromfavourit(Id: any) {
    var items = JSON.parse(localStorage['Favourits']);
    var arr = new Array();
    console.log(items);
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].id);
      if (items[i].id == Id) {
        console.log(items);
        delete items[i]; // slice doesn't work not sure why
        console.log(items);
      }
      if (items[i] != null) {
        console.log(arr);
        arr.push(items[i]); // slice doesn't work not sure why
        // console.log("Arr"+arr[i]+"");
      }
    }

    var item = JSON.stringify(arr);
    console.log(item);

    localStorage.setItem('Favourits', item);
    window.location.href = '/Favourit';
  }
}
