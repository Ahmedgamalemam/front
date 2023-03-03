import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
//validatation
addform = new FormGroup({
  productName : new FormControl(null,[Validators.required,Validators.minLength(3)]),
  productPrice : new FormControl(null,[Validators.required]),
  productQuantity : new FormControl(null,[Validators.required]),
  formFile: new FormControl(null,[Validators.required])



});
get productName(){
  return this.addform.get('productName') as FormControl;
}  
get productPrice(){
  return this.addform.get('productPrice') as FormControl;
}
get productQuantity(){
  return this.addform.get('productQuantity') as FormControl;
}
get formFile(){
  return this.addform.get('formFile') as FormControl;
}
}
