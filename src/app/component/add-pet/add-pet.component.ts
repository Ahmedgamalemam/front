import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { PetsService } from 'src/app/core/Services/ModelServices/Pets.service';
import { SharedService } from 'src/app/core/Services/Shared.service';
import { AlertService } from 'src/app/core/Services/alert.service';
import { PetSService } from 'src/app/core/pet-s.service';
import { Pets } from 'src/app/core/models/pets';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  pet!:Pets;
  constructor(private myservice:PetsService,private fb :FormBuilder,private data:SharedService,private alertify: AlertService){
    console.log(this.addingform)
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

  addingform = this.fb.group({
    petName : new FormControl(null,[Validators.required,Validators.minLength(3)]),
    petPrice : new FormControl(null,[Validators.required]),
    petAge : new FormControl(null,[Validators.required]),
    petGender : new FormControl(null,[Validators.required]),
    Description : new FormControl(null,[Validators.required]),
    Category: new FormControl(null,Validators.required),
    Type: new FormControl(null,Validators.required),
     //formFile: new FormControl(null,[Validators.required])
  });

  get petName(){
    return this.addingform.get('petName') as FormControl;
  }
  get petPrice(){
    return this.addingform.get('petPrice') as FormControl;
  }
  get petAge(){
    return this.addingform.get('petAge') as FormControl;
  }
  get petGender(){
    return this.addingform.get('petGender') as FormControl;
  }
  get Categoery(){
    return this.addingform.get('Category') as FormControl;
  }
  get Type(){
    return this.addingform.get('Type') as FormControl;
  }
  get Description(){
    return this.addingform.get('Description') as FormControl;
  }

  petData(): Pets {
    return this.pet = {
      id:0,
      type :this.Type.value,
      description:this.Description.value,
      age:this.petAge.value,
      sex:this.petGender.value,
      price:this.petPrice.value,
      image:this.profile.toString(),
      category_ID:this.Categoery.value,
      category_Name:"",
      name:this.petName.value
    }
  }
  add(){
   this.myservice.postPets(this.petData()).subscribe((data:any)=>{console.log(data)});
        this.alertify.success('Congrats, you have successfully added an item');
        console.log(this.petData())
        console.log(this.profile)
  }

}
