import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/Services/ModelServices/user.service';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  Profile!:User;
  id!:number;
  user!:User;

constructor(public search:SearchService,private myService:UserService){
  this.id=Number(localStorage.getItem("id"));
   myService.GetUserById(this.id).subscribe(
  (responce:any)=>{
    this.Profile=responce
    this.Edit.patchValue({
      Fname:this.Profile.fname,
      Lname:this.Profile.lname,
      Age:this.Profile.age,
      City:this.Profile.city,
      Area:this.Profile.area,
      buildingNumber:this.Profile.buildingID,
      Email:this.Profile.email,
      Phone:this.Profile.phone,
    });
    // this.image=this.Profile.image
    console.log(responce)
  })
  // this.Edit.patchValue({"Fname":this.Profile.fname,"Lname":this.Profile.lname})
  // this.Edit.get("Fname")?.setValue(this.Profile.fname);

}
ngOnInit() {
}
  image: any = "";

  onFileSelected() {
    const inputNode: any = document.getElementById("ProfileName");

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.image = e.target.result;
        //console.log(this.profile)
        document.getElementById("ProfileImg")?.setAttribute("src", this.image)
      };
      reader.readAsDataURL(inputNode.files[0]);
    }

  }


  Edit= new FormGroup({
    Fname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Lname: new FormControl("",[Validators.required,Validators.minLength(3)]),
    Age: new FormControl(0, [Validators.min(12), Validators.max(40)]),
    City: new FormControl("",Validators.required),
    Area:new FormControl("",Validators.required),
    buildingNumber:new FormControl(0,Validators.required),
    Phone: new FormControl("",[Validators.required,Validators.pattern("01+[1-5\b]+[0-9\b]+$"),Validators.minLength(11),Validators.maxLength(11)]),
    Email: new FormControl("",[Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}")]),

})

  get Fname(){
    return this.Edit.get('Fname') as FormControl;
  }

  get Lname(){
    return this.Edit.get('Lname') as FormControl;
  }
  get Age(){
    return this.Edit.get('Age') as FormControl;
  }

  get Phone(){
    return this.Edit.get('Phone') as FormControl;
  }
  get City(){
    return this.Edit.get('City') as FormControl;
  }
  get Area(){
    return this.Edit.get('Area') as FormControl;
  }
  get buildingNumber(){
    return this.Edit.get('buildingNumber') as FormControl;
  }
  get Email(){
    return this.Edit.get('Email') as FormControl;
  }
  userData(): User {
    return this.user = {
      id:this.Profile.id,
      fname:this.Fname.value,
      lname:this.Lname.value,
      type:"user",
      age:this.Age.value,
      city:this.City.value,
      area:this.Area.value,
      buildingID:this.buildingNumber.value,
      image:this.image==""?this.Profile.image:this.image,
      phone:this.Phone.value,
      email:this.Email.value,
      password:this.Profile.password
    }
  }

  SaveChanges() {
    this.myService.EditProfile(this.userData(),this.Profile.id).subscribe((res:any)=>console.log(res))
    // this.route.navigate(['/Profile/'+this.id])
    window.location.href='/Profile/'+this.id
  }
}


