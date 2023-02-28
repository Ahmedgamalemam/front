import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
constructor(private pet:PetSService){

}

Addtocart()
  {
  //  this.pet.setItem();
  }
}
