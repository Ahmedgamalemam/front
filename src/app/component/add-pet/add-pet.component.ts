import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Pets } from 'src/app/core/models/Pets';
import { PetsService } from 'src/app/core/Services/ModelServices/Pets.service';
import { SharedService } from 'src/app/core/Services/Shared.service';
import { AlertService } from 'src/app/core/Services/alert.service';
import { PetSService } from 'src/app/core/pet-s.service';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  getdata:any;
  pet!:Pets;
  constructor(private myservice:PetsService,private fb :FormBuilder,private data:SharedService,private alertify: AlertService){
    this.getdata=data.getItem();
  }
  addingform = this.fb.group({
    petName : new FormControl(null,[Validators.required,Validators.minLength(3)]),
    petPrice : new FormControl(null,[Validators.required]),
    petAge : new FormControl(null,[Validators.required]),
    petGender : new FormControl(null,[Validators.required]),
    Category: new FormControl(null,Validators.required),
    formFile: new FormControl(null,[Validators.required])
  
  
  
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
  get formFile(){
    return this.addingform.get('formFile') as FormControl;
  }

  petData(): Pets {
    return this.getdata = {
      type :this.getdata.type,
      description:this.getdata.description,
      age:this.getdata.age,
      sex:this.getdata.sex,
      price:this.getdata.price,
      image:this.getdata.image,
      category_Name:this.getdata.category_Name,
      name:this.getdata.name
    }
  }
  add(){
    this.myservice.postPets(this.petData()).subscribe((data:any)=>{console.log(data)});
        this.alertify.success('Congrats, you have successfully added an item');
        console.log(this.petData())
  }

}
