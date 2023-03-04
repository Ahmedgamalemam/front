import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { AlertService } from 'src/app/core/Services/alert.service';
import { ProductsService } from 'src/app/core/Services/ModelServices/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  Product!:Product;
  id!:number;
  constructor(private myService:ProductsService,private fb:FormBuilder,private alertify: AlertService,myActivated:ActivatedRoute)
  {
    this.id=myActivated.snapshot.params["id"];
    myService.GetProductByID(this.id).subscribe(
      (responce:any)=>{
        this.Product=responce
        this.Edit.patchValue({
              Description:this.Product.description,
              productQuantity:this.Product.quantity,
              productPrice:this.Product.price,
              Category:this.Product.category_ID,
              productName:this.Product.name
        });
   })
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

Edit = new FormGroup({
  productName : new FormControl("",[Validators.required,Validators.minLength(3)]),
  productPrice : new FormControl(0,[Validators.required]),
  productQuantity : new FormControl(0,[Validators.required]),
  Description : new FormControl("",[Validators.required]),
  Category: new FormControl(0,Validators.required),
  // formFile: new FormControl("",[Validators.required])
});
get productName(){
  return this.Edit.get('productName') as FormControl;
}
get productPrice(){
  return this.Edit.get('productPrice') as FormControl;
}
get productQuantity(){
  return this.Edit.get('productQuantity') as FormControl;
}

get Categoery(){
  return this.Edit.get('Category') as FormControl;
}

get Description(){
  return this.Edit.get('Description') as FormControl;
}

ProductData(): Product {
  return this.Product = {
  id:this.Product.id,
  name :this.productName.value,
  price :this.productPrice.value,
  description: this.Description.value,
  quantity:this.productQuantity.value,
  image :this.profile==""?this.Product.image:this.profile,
  category_ID:this.Categoery.value,
  category_Name:"",
  }
}
EditProduct(){
  this.myService.EditProduct(this.ProductData(),this.Product.id).subscribe((data:any)=>{console.log(data)});
       this.alertify.success('Congrats, you have successfully Edit an item');
       console.log(this.ProductData())
       console.log(this.profile)
 }

}
