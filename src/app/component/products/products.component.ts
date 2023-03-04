import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { PetSService } from 'src/app/core/pet-s.service';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { ProductsService } from 'src/app/core/Services/ModelServices/products.service';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  pages: number = 1;
  Products: Product[] = [];
  id:any;
  FilteredProduct = new Array();
  constructor(
    public search: SearchService,
    public Productservice: ProductsService,
    public searchservice: NavBarService,
    public petservice:PetSService
  ) {
    Productservice.getProducts().subscribe((responce: any) => {
      responce.forEach((element: any) => {
        this.Products.push(element);
      });
      this.FilteredProduct = this.Products;
    });
  }
  productcategory(item: any) {
    let inputsearch = (item.target as HTMLImageElement).alt;
    this.searchservice.setsearchByID(inputsearch);
    console.log(inputsearch);
  }
  searchtext(text: any) {
    this.FilteredProduct = this.Products.filter((Product: any) =>
      Product.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  searchCatogry(catogry: any) {
    this.FilteredProduct = this.Products.filter((Product: any) =>
      Product.category_Name.toLowerCase().includes(catogry.toLowerCase())
    );
  }
  searchID(Id: any) {
    this.FilteredProduct = this.Products.filter(
      (Product: any) => Product.category_ID == Id
    );
  }

  ngDoCheck() {
    this.id=Number(localStorage.getItem("id"))

    let filterValue = this.searchservice.getsearch();
    let filterValue2 = this.searchservice.getsearchBYID();
    let filterValue3 = this.searchservice.getsearchBYCatogry();
    if (filterValue == '' && filterValue2 == '' && filterValue3 == '') {
      this.FilteredProduct = this.Products;
    } else if (filterValue != '') {
      this.searchtext(filterValue);
    } else if (filterValue2 != '') {
      this.searchID(Number(filterValue2));
    } else if (filterValue3 != '') {
      this.searchCatogry(filterValue3);
    }

    //console.log(this.FilteredProduct.length);
  }

  ngOnInit() {
    this.cardsPerPage_products = this.getCardsPerPage_products();
    this.initializeSlider_products();
    this.search.Show();
  }
  arr_products: string[] = [
    'assets/images/cartfood.png',
    'assets/images/cartmedicines.png',
    'assets/images/carclothes.png',
    'assets/images/cartcages.png',
    'assets/images/carttools.png',
  ];
  totalCards_products: number = this.arr_products.length;

  currentPage_products: number = 1;
  pagePosition_products: string = '0%';
  cardsPerPage_products: number = 0;
  totalPages_products: number = 0;
  overflowWidth_products: string = '';
  cardWidth_products: string = '';
  containerWidth_products: number = 0;
  @ViewChild('container', { static: true, read: ElementRef })
  container_products: ElementRef<HTMLInputElement> = {} as ElementRef;
  @HostListener('window:resize') windowResize_products() {
    let newCardsPerPage = this.getCardsPerPage_products();
    if (newCardsPerPage != this.cardsPerPage_products) {
      this.cardsPerPage_products = newCardsPerPage;
      this.initializeSlider_products();
      if (this.currentPage_products > this.totalPages_products) {
        this.currentPage_products = this.totalPages_products;
        this.populatePagePosition_products();
      }
    }
  }
  initializeSlider_products() {
    this.totalPages_products = Math.ceil(
      this.totalCards_products / this.cardsPerPage_products
    );
    this.overflowWidth_products = `calc(${this.totalPages_products * 100}% + ${
      this.totalPages_products * 10
    }px)`;
    this.cardWidth_products = `calc((${100 / this.totalPages_products}% - ${
      this.cardsPerPage_products * 10
    }px) / ${this.cardsPerPage_products})`;
  }

  getCardsPerPage_products() {
    return Math.floor(this.container_products.nativeElement.offsetWidth / 200);
  }

  changePage_products(incrementor: any) {
    this.currentPage_products += incrementor;
    this.populatePagePosition_products();
  }

  populatePagePosition_products() {
    if (window.innerWidth <= 1199 && window.innerWidth > 922) {
      this.pagePosition_products = `calc(${
        -24 * (this.currentPage_products - 1)
      }% - ${10 * (this.currentPage_products - 1)}px)`;
    } else if (window.innerWidth <= 922 && window.innerWidth > 767) {
      this.pagePosition_products = `calc(${
        -32 * (this.currentPage_products - 1)
      }% - ${10 * (this.currentPage_products - 1)}px)`;
      this.totalPages_products = 3;
    } else if (window.innerWidth <= 767 && window.innerWidth > 415) {
      this.pagePosition_products = `calc(${
        -49 * (this.currentPage_products - 1)
      }% - ${10 * (this.currentPage_products - 1)}px)`;

      this.totalPages_products = 4;
    } else if (window.innerWidth <= 415) {
      this.pagePosition_products = `calc(${
        -100 * (this.currentPage_products - 1)
      }% - ${10 * (this.currentPage_products - 1)}px)`;
    }
  }
  addtocardpro(item:any){
    this.petservice.setItem(item);
  }

// addtofavourite
addtofavourite(item:any){
  this.petservice.setfav(item)
}
}
