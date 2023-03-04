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
  constructor(public myservice:ClinicService){
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
  delete(item:any,id:any){
    var d = 0;
    while (d<this.clinik.length){
      if (this.clinik[d].name==item) {
        this.clinik.splice(d,1)
        this.myservice.delete(id).subscribe((data:any)=>{console.log(data)});
      }
        ++d;
      
      
    }
  }
}
