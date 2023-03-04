import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pets } from 'src/app/core/models/Pets';
import { AlertService } from 'src/app/core/Services/alert.service';
import { PetsService } from 'src/app/core/Services/ModelServices/Pets.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  Pet!:Pets;
  id!:number;
  constructor(private myService:PetsService,private fb:FormBuilder,private alertify: AlertService,myActivated:ActivatedRoute)
  {
    this.id=myActivated.snapshot.params["id"];
    myService.getPetByID(this.id).subscribe(
      (responce:any)=>{
        this.Pet=responce
        this.Edit.patchValue({
              Type:this.Pet.type,
              Description:this.Pet.description,
              petAge:this.Pet.age,
              petGender:this.Pet.sex,
              petPrice:this.Pet.price,
              Category:this.Pet.category_ID,
              petName:this.Pet.name
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
  Edit = this.fb.group({
    petName : new FormControl('',[Validators.required,Validators.minLength(3)]),
    petPrice : new FormControl(0,[Validators.required]),
    petAge : new FormControl("",[Validators.required]),
    petGender : new FormControl('',[Validators.required]),
    Description : new FormControl('',[Validators.required]),
    Category: new FormControl(0,Validators.required),
    Type: new FormControl('',Validators.required),
     //formFile: new FormControl(null,[Validators.required])
  });
  ngOnInit() {
  }


  get petName(){
    return this.Edit.get('petName') as FormControl;
  }
  get petPrice(){
    return this.Edit.get('petPrice') as FormControl;
  }
  get petAge(){
    return this.Edit.get('petAge') as FormControl;
  }
  get petGender(){
    return this.Edit.get('petGender') as FormControl;
  }
  get Categoery(){
    return this.Edit.get('Category') as FormControl;
  }
  get Type(){
    return this.Edit.get('Type') as FormControl;
  }
  get Description(){
    return this.Edit.get('Description') as FormControl;
  }

  petData(): Pets {
    return this.Pet = {
      id:this.Pet.id,
      type :this.Type.value,
      description:this.Description.value,
      age:this.petAge.value,
      sex:this.petGender.value,
      price:this.petPrice.value,
      image:this.profile==""?this.Pet.image:this.profile,
      category_ID:this.Categoery.value,
      category_Name:"",
      name:this.petName.value
    }
  }
  EditPet(){
   this.myService.EditPet(this.petData(),this.Pet.id).subscribe((data:any)=>{console.log(data)});
        this.alertify.success('Congrats, you have successfully Edit an item');
        console.log(this.petData())
        console.log(this.profile)
  }
}
