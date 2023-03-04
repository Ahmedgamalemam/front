import { Component } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/Services/ModelServices/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
admins:User[]=[];
constructor(myservice:UserService){
  myservice.getAll().subscribe(
    (ad:any)=>{
      ad.forEach((element:User) => {
        if(element.type == "Admin"){
          this.admins.push(element)
        }
        // console.log(this.admins)
      });
      // this.admins.filter(admins=>admins.type.toLowerCase().includes("Admin".toLowerCase()));

    }
  )
  
}

}

