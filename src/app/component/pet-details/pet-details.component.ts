import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pets } from 'src/app/core/models/Pets';
import { PetsService } from 'src/app/core/Services/ModelServices/Pets.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent {
  Pet!:Pets;
  id=0;
  constructor(myActivated:ActivatedRoute,petService:PetsService){
    this.id=myActivated.snapshot.params["id"];
    petService.getPetByID(this.id).subscribe((response:any)=>{
      this.Pet=response;
      console.log(response)
    })
  }

}
