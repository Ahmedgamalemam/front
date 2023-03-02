import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from 'src/app/core/Services/category.service';
import { Category } from 'src/app/core/models/category';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public nav:NavBarService,public search:SearchService){


  arr_category_pets:Category[]=[]

  totalCards_pets: number=0;

  constructor(public nav:NavBarService,category:CategoryService){
    
    category.get_category().subscribe((responce:any)=>{
      responce.forEach((element:any) => {
        this.arr_category_pets.push(element)
        console.log(element)
      })
      console.log(this.arr_category_pets)
      this.totalCards_pets = this.arr_category_pets.length;
      
      console.log(this.totalCards_pets)
    })
   
  }


// pets card

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
    let newCardsPerPagepet = this.getCardsPerPage_pets();
    if (newCardsPerPagepet != this.cardsPerPage_pets) {
      this.cardsPerPage_pets = newCardsPerPagepet;
    let newCardsPerPagepet = this.getCardsPerPage_pets();
    if (newCardsPerPagepet != this.cardsPerPage_pets) {
      this.cardsPerPage_pets = newCardsPerPagepet;
      this.initializeSlider_pets();
      if (this.currentPage_pets > this.totalPages_pets) {
        this.currentPage_pets = this.totalPages_pets;
        this.populatePagePosition_pets();
      }
    }


    let newCardsPerPagepro = this.getCardsPerPage_products();
    if (newCardsPerPagepro != this.cardsPerPage_products) {
      this.cardsPerPage_products = newCardsPerPagepro;
      this.initializeSlider_products();
      if (this.currentPage_products > this.totalPages_products) {
        this.currentPage_products = this.totalPages_products;
        this.populatePagePosition_products();
      }
    }


    let newCardsPerPagepro = this.getCardsPerPage_products();
    if (newCardsPerPagepro != this.cardsPerPage_products) {
      this.cardsPerPage_products = newCardsPerPagepro;
      this.initializeSlider_products();
      if (this.currentPage_products > this.totalPages_products) {
        this.currentPage_products = this.totalPages_products;
        this.populatePagePosition_products();
      }
    }
  }

  ngOnInit() {
    this.nav.Show();
    this.search.hide()
    this.cardsPerPage_pets = this.getCardsPerPage_pets();
    this.initializeSlider_pets();

    this.cardsPerPage_products = this.getCardsPerPage_products();
    this.initializeSlider_products();
  }
 
    initializeSlider_pets() {

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
    if(window.innerWidth <= 1303 && window.innerWidth > 922 ){
    if(window.innerWidth <= 1303 && window.innerWidth > 922 ){
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


  // card of products

  arr_products: string[] = ["assets/images/cartfood.png",
"assets/images/cartmedicines.png",
"assets/images/carclothes.png",
"assets/images/cartcages.png",
"assets/images/carttools.png"];
totalCards_products: number = this.arr_products.length;

currentPage_products: number = 1;
  pagePosition_products: string = "0%";
  cardsPerPage_products: number = 0;
  totalPages_products: number = 0;
  overflowWidth_products: string = "";
  cardWidth_products: string = "";
  containerWidth_products: number = 0;
  @ViewChild("container", { static: true, read: ElementRef })
  container_products: ElementRef<HTMLInputElement> = {} as ElementRef;
 
  


  initializeSlider_products() {
    this.totalPages_products = Math.ceil(this.totalCards_products / this.cardsPerPage_products);
    this.overflowWidth_products = `calc(${this.totalPages_products * 100}% + ${this.totalPages_products *
      10}px)`;
    this.cardWidth_products = `calc((${100 / this.totalPages_products}% - ${this.cardsPerPage_products *
      10}px) / ${this.cardsPerPage_products})`;
  }

  getCardsPerPage_products() {
    return Math.floor(this.container_products.nativeElement.offsetWidth / 200);
  }

  changePage_products(incrementor:any) {
    this.currentPage_products += incrementor;
    this.populatePagePosition_products();
  }

  populatePagePosition_products() {
    if(window.innerWidth <= 1305 && window.innerWidth > 922 ){
    if(window.innerWidth <= 1305 && window.innerWidth > 922 ){
      this.pagePosition_products = `calc(${-24 * (this.currentPage_products-1)}% - ${10 *
      (this.currentPage_products - 1)}px)`;
    }else if(window.innerWidth <= 922 && window.innerWidth > 767 ){
      this.pagePosition_products = `calc(${-32 * (this.currentPage_products-1)}% - ${10 *
      (this.currentPage_products - 1)}px)`;
        this.totalPages_products = 3
    }else if(window.innerWidth <= 767 && window.innerWidth > 415){
      this.pagePosition_products = `calc(${-49 * (this.currentPage_products-1)}% - ${10 *
        (this.currentPage_products - 1)}px)`;

        this.totalPages_products = 4
    }else if(window.innerWidth <= 415){
      this.pagePosition_products = `calc(${-100 * (this.currentPage_products-1)}% - ${10 *
      (this.currentPage_products - 1)}px)`;
    }
  }
}
