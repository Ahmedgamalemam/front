import { Component } from '@angular/core';
import { Clinic } from 'src/app/core/models/clinic';
import { ClinicService } from 'src/app/core/Services/clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent {
clinik!:Clinic;
constructor(myservice:ClinicService){
  myservice.getAll().subscribe(
    (res:any)=>{
      res.forEach((element:any) => {
        this.clinik.Push(element)
      });
    }
  )
}
}
