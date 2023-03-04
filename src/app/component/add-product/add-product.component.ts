import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/product';
import { AlertService } from 'src/app/core/Services/alert.service';
import { ProductsService } from 'src/app/core/Services/ModelServices/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
//validatation
product!:Product;

  constructor(private myservice:ProductsService,private alertify: AlertService){
    console.log(this.addform)
  }

  profile:any="";
  onFileSelected() {
    const inputNode: any = document.getElementById("ProfileName");

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.profile = e.target.result;


        document.getElementById("ProfileImg")?.setAttribute("src",this.profile)

      };
      reader.readAsDataURL(inputNode.files[0]);

    }
  }

addform = new FormGroup({
  productName : new FormControl(null,[Validators.required,Validators.minLength(3)]),
  productPrice : new FormControl(null,[Validators.required]),
  productQuantity : new FormControl(null,[Validators.required]),
  Description : new FormControl(null,[Validators.required]),
  Category: new FormControl(null,Validators.required),
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
get Categoery(){
  return this.addform.get('Category') as FormControl;
}

get Description(){
  return this.addform.get('Description') as FormControl;
}

ProductData(): Product {
  return this.product = {
  id:0,
  name :this.productName.value,
  price :this.productPrice.value,
  description: this.Description.value,
  quantity:this.productQuantity.value,
  image :this.profile.toString(),
  category_ID:this.Categoery.value,
  category_Name:"",
  }
}
add(){
  this.myservice.AddProduct(this.ProductData()).subscribe((data:any)=>{console.log(data)});
       this.alertify.success('Congrats, you have successfully added an item');
       console.log(this.ProductData())
       console.log(this.profile)
 }

}
