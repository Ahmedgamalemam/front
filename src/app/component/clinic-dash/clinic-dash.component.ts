import { Component } from '@angular/core';
import { Clinic } from 'src/app/core/models/clinic';
import { ClinicService } from 'src/app/core/Services/clinic.service';

@Component({
  selector: 'app-clinic-dash',
  templateUrl: './clinic-dash.component.html',
  styleUrls: ['./clinic-dash.component.css']
})
export class ClinicDashComponent {
  clinik:Clinic[]=[];
  constructor(myservice:ClinicService){
    myservice.getAll().subscribe(
      (res:any)=>{
        res.forEach((element:any) => {
          this.clinik.push(element)
          console.log(this.clinik)
        });
      }
    )
    console.log(this.clinik)
  }
  ngOnInit(){
    console.log(this.clinik)
  }
  edit(){}
  delete(){}
}
