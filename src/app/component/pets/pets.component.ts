import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from 'src/app/core/Services/ModelServices/Pets.service';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { SharedService } from 'src/app/core/Services/Shared.service';
import { PetSService } from 'src/app/core/pet-s.service';
import { SearchService } from 'src/app/core/Services/search.service';
import { Pets } from 'src/app/core/models/pets';
import { LocalStorageService } from 'src/app/core/Services/local-storage.service';



@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent {
  pages: number = 1;
  pets: Pets[] = [];
  FilteredPets: Pets[] = [];
  card: any;
  id:any;
  constructor(
    public search: SearchService,
    private Services: PetsService,
    public searchservice: NavBarService,
    private local:LocalStorageService
  ) {
    Services.getpets().subscribe((response: any) => {
      response.forEach((element: Pets) => {
        this.pets.push(element);
        console.log(element.category_Name);
        console.log(element);
      });

      this.FilteredPets = this.pets;
    });
  }

  petcategory(item: any) {
    let inputsearch = (item.target as HTMLImageElement).alt;
    this.searchservice.setsearchByID(inputsearch);
    console.log(inputsearch);
  }
  searchtext(text: any) {
    this.FilteredPets = this.pets.filter((Product: any) =>
      Product.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  searchCatogry(catogry: any) {
    this.FilteredPets = this.pets.filter((Product: any) =>
      Product.category_Name.toLowerCase().includes(catogry.toLowerCase())
    );
  }
  searchID(Id: any) {
    this.FilteredPets = this.pets.filter(
      (Product: any) => Product.category_ID == Id
    );
  }

  ngDoCheck() {
    this.id=Number(localStorage.getItem("id"))

    let filterValue = this.searchservice.getsearch();
    let filterValue2 = this.searchservice.getsearchBYID();
    let filterValue3 = this.searchservice.getsearchBYCatogry();
    if (filterValue == '' && filterValue2 == '' && filterValue3 == '') {
      this.FilteredPets = this.pets;
    } else if (filterValue != '') {
      this.searchtext(filterValue);
    } else if (filterValue2 != '') {
      this.searchID(Number(filterValue2));
    } else if (filterValue3 != '') {
      this.searchCatogry(filterValue3);
    }
  }

  arr_pets: string[] = [
    'assets/images/cardcat.png',
    'assets/images/cartdog.png',
    'assets/images/cartfish.png',
    'assets/images/cartbirds.png',
    'assets/images/carthamsters.png',
  ];

  totalCards_pets: number = this.arr_pets.length;

  currentPage_pets: number = 1;
  pagePosition_pets: string = '0%';
  cardsPerPage_pets: number = 0;
  totalPages_pets: number = 0;
  overflowWidth_pets: string = '';
  cardWidth_pets: string = '';
  containerWidth_pets: number = 0;
  @ViewChild('container', { static: true, read: ElementRef })
  container_pets: ElementRef<HTMLInputElement> = {} as ElementRef;
  @HostListener('window:resize') windowResize_pets() {
    let newCardsPerPage = this.getCardsPerPage_pets();
    if (newCardsPerPage != this.cardsPerPage_pets) {
      this.cardsPerPage_pets = newCardsPerPage;
      this.initializeSlider_pets();
      if (this.currentPage_pets > this.totalPages_pets) {
        this.currentPage_pets = this.totalPages_pets;
        this.populatePagePosition_pets();
      }
    }
  }

  ngOnInit() {
    this.cardsPerPage_pets = this.getCardsPerPage_pets();
    this.initializeSlider_pets();
    this.search.Show();
    console.log(this.pets);
  }

  initializeSlider_pets() {
    this.totalPages_pets = Math.ceil(
      this.totalCards_pets / this.cardsPerPage_pets
    );
    this.overflowWidth_pets = `calc(${this.totalPages_pets * 100}% + ${
      this.totalPages_pets * 10
    }px)`;
    this.cardWidth_pets = `calc((${100 / this.totalPages_pets}% - ${
      this.cardsPerPage_pets * 10
    }px) / ${this.cardsPerPage_pets})`;
  }

  getCardsPerPage_pets() {
    return Math.floor(this.container_pets.nativeElement.offsetWidth / 200);
  }

  changePage_pets(incrementor: any) {
    this.currentPage_pets += incrementor;
    this.populatePagePosition_pets();
  }

  populatePagePosition_pets() {
    if (window.innerWidth <= 1199 && window.innerWidth > 922) {
      this.pagePosition_pets = `calc(${-24 * (this.currentPage_pets - 1)}% - ${
        10 * (this.currentPage_pets - 1)
      }px)`;
    } else if (window.innerWidth <= 922 && window.innerWidth > 767) {
      this.pagePosition_pets = `calc(${-32 * (this.currentPage_pets - 1)}% - ${
        10 * (this.currentPage_pets - 1)
      }px)`;
      this.totalPages_pets = 3;
    } else if (window.innerWidth <= 767 && window.innerWidth > 415) {
      this.pagePosition_pets = `calc(${-49 * (this.currentPage_pets - 1)}% - ${
        10 * (this.currentPage_pets - 1)
      }px)`;
      this.totalPages_pets = 4;
    } else if (window.innerWidth <= 415) {
      this.pagePosition_pets = `calc(${-100 * (this.currentPage_pets - 1)}% - ${
        10 * (this.currentPage_pets - 1)
      }px)`;
    }
  }

  Filter(category: string) {
    this.FilteredPets = this.pets.filter((pet: Pets) =>
      pet.category_Name.toLowerCase().includes(category.toLowerCase())
    );
  }
  // Carts: any = new Array();
  // Favourits: any = new Array();
  f: number = 0;
  i: number = 0;
  // add to cart
  addpetcart(item: any) {
    //localStorage.clear();

    var name = JSON.parse(localStorage['Carts']).some(
      (c: any) => c.name == item.name
    );
    if (name == false) {
      this.local.Carts.push(item);
    }
    localStorage.setItem('Carts', JSON.stringify(this.local.Carts));
    this.i++;
  }

  // addtofavourite
  addtofavourite(item: any) {
    var name = JSON.parse(localStorage['Favourits']).some(
      (c: any) => c.name == item.name
    );
    if (name == false) {
      this.local.Favourits.push(item);
    }

    localStorage.setItem('Favourits', JSON.stringify(this.local.Favourits));
    this.f++;
  }


}



