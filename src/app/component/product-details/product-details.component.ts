import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product!: Product;
  Quant: number = 0;
  id: number = 0;
  constructor(
    public Productservice: ProductsService,
    myActive: ActivatedRoute
  ) {
    this.id = myActive.snapshot.params['id'];
    Productservice.GetProductByID(this.id).subscribe((responce: any) => {
      this.product = responce;
      this.Quant = Number(responce.quantity);
      this.form.controls.Quantity.addValidators(Validators.max(this.Quant));
      //console.log(this.Quant);
      //console.log(responce.quantity)
    });
    //console.log(this.form)
  }

  form = new FormGroup({
    Quantity: new FormControl(1),
  });
}
