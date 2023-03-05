import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { PetSService } from 'src/app/core/pet-s.service';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { ProductsService } from 'src/app/core/Services/ModelServices/products.service';
import { SearchService } from 'src/app/core/Services/search.service';
import { LocalStorageService } from 'src/app/core/Services/local-storage.service';

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
    public local: LocalStorageService
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
    'assets/images/Kennels.png',
    'assets/images/toys.png',
    'assets/images/Accessories.png',
    'assets/images/Grooming.png',
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
    if (window.innerWidth <= 1400 && window.innerWidth > 1182) {
      this.pagePosition_products = `calc(${
        -19 * (this.currentPage_products - 1)
      }% - ${10 * (this.currentPage_products - 1)}px)`;
    } else if (window.innerWidth <= 1182 && window.innerWidth > 975) {
      this.pagePosition_products = `calc(${
        -24 * (this.currentPage_products - 1)
      }% - ${10 * (this.currentPage_products - 1)}px)`;
      this.totalPages_products = 3;
    } else if (window.innerWidth <= 975 && window.innerWidth > 751) {
      this.pagePosition_products = `calc(${
        -32 * (this.currentPage_products - 1)
      }% - ${10 * (this.currentPage_products - 1)}px)`;

      this.totalPages_products = 4;
    } else if (window.innerWidth <= 751) {
      this.pagePosition_products = `calc(${
        -49 * (this.currentPage_products - 1)
      }% - ${10 * (this.currentPage_products - 1)}px)`;
      this.totalPages_products = 5;
    }
  }
  // Carts: any = new Array();
  // Favourits: any = new Array();
  f: number = 0;
  i: number = 0;
  // add to cart
  addtocardpro(item: any) {
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
