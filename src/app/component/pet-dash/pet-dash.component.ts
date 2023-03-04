import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pets } from 'src/app/core/models/Pets';
import { PetsService } from 'src/app/core/Services/ModelServices/Pets.service';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { SearchService } from 'src/app/core/Services/search.service';
import { SharedService } from 'src/app/core/Services/Shared.service';
@Component({
  selector: 'app-pet-dash',
  templateUrl: './pet-dash.component.html',
  styleUrls: ['./pet-dash.component.css']
})
export class PetDashComponent {
  pets:Pets[]=[];
  FilteredPets:Pets[]=[];
  card:any;
  constructor(public search:SearchService,private Services:PetsService,public searchservice: NavBarService )
  {
    Services.getpets().subscribe((response:any)=>{
      response.forEach((element:Pets) => {
        this.pets.push(element);
        console.log(element.category_Name)
        console.log(element)
       
      })

      this.FilteredPets = this.pets;

  })
  }
  delete(){
    this.Services.deletePets().subscribe((data:any)=>{data.delete});

  }
  edit(){}
}
