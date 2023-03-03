import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  addingform = new FormGroup({
    petName : new FormControl(null,[Validators.required,Validators.minLength(3)]),
    petPrice : new FormControl(null,[Validators.required]),
    petAge : new FormControl(null,[Validators.required]),
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
}
