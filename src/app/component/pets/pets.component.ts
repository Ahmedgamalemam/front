<<<<<<< HEAD
import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';
=======
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/core/Services/search.service';
>>>>>>> 8c72e213a004794c936ce8af1f948bf59c6a8263

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
<<<<<<< HEAD
constructor(private pet:PetSService){
=======
  constructor(public search:SearchService){}
  arr_pets: string[] = ["assets/images/cardcat.png",
"assets/images/cartdog.png",
"assets/images/cartbirds.png",
"assets/images/carthamsters.png",
"assets/images/cartfish.png"];

totalCards_pets: number = this.arr_pets.length;

currentPage_pets: number = 1;
  pagePosition_pets: string = "0%";
  cardsPerPage_pets: number = 0;
  totalPages_pets: number = 0;
  overflowWidth_pets: string = "";
  cardWidth_pets: string = "";
  containerWidth_pets: number = 0;
  @ViewChild("container", { static: true, read: ElementRef })
  container_pets: ElementRef<HTMLInputElement> = {} as ElementRef;
  @HostListener("window:resize") windowResize_pets() {
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
    this.search.Show()

  }

  initializeSlider_pets() {
    this.totalPages_pets = Math.ceil(this.totalCards_pets / this.cardsPerPage_pets);
    this.overflowWidth_pets = `calc(${this.totalPages_pets * 100}% + ${this.totalPages_pets *
      10}px)`;
    this.cardWidth_pets = `calc((${100 / this.totalPages_pets}% - ${this.cardsPerPage_pets *
      10}px) / ${this.cardsPerPage_pets})`;
  }

  getCardsPerPage_pets() {
    return Math.floor(this.container_pets.nativeElement.offsetWidth / 200);
  }

  changePage_pets(incrementor:any) {
    this.currentPage_pets += incrementor;
    this.populatePagePosition_pets();
  }

  populatePagePosition_pets() {
    if(window.innerWidth <= 1199 && window.innerWidth > 922 ){
      this.pagePosition_pets = `calc(${-24 * (this.currentPage_pets-1)}% - ${10 *
      (this.currentPage_pets - 1)}px)`;
    }else if(window.innerWidth <= 922 && window.innerWidth > 767 ){
      this.pagePosition_pets = `calc(${-32 * (this.currentPage_pets-1)}% - ${10 *
      (this.currentPage_pets - 1)}px)`;
        this.totalPages_pets = 3
    }else if(window.innerWidth <= 767 && window.innerWidth > 415){
      this.pagePosition_pets = `calc(${-49 * (this.currentPage_pets-1)}% - ${10 *
        (this.currentPage_pets - 1)}px)`;
        this.totalPages_pets = 4
    }else if(window.innerWidth <= 415){
      this.pagePosition_pets = `calc(${-100 * (this.currentPage_pets-1)}% - ${10 *
      (this.currentPage_pets - 1)}px)`;
    }
  }
>>>>>>> 8c72e213a004794c936ce8af1f948bf59c6a8263

}

Addtocart()
  {
  //  this.pet.setItem();
  }
}
