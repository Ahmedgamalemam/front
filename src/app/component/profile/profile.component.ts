import { Component } from '@angular/core';
import { SearchService } from 'src/app/core/Services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/Services/ModelServices/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  prof!:User;
  ID=0;


constructor(public search:SearchService,myService:UserService,myactivated:ActivatedRoute,private route:Router ){
  this.ID = myactivated.snapshot.params["id"]
   myService.GetUserById(this.ID).subscribe(
  (res:any)=>{
    this.prof=res
    console.log(res)
  })
}

ngOnInit() {
  this.search.hide()
  console.log(this.prof)
}

edit(){
  console.log("hi")
  this.route.navigate(["/home"])
}

}


