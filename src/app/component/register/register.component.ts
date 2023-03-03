import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/User';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';
import { SharedService } from 'src/app/core/Services/Shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user!: User;
  constructor(public nav:NavBarService,private data:SharedService){ }
  ngOnInit(){
    this.nav.hide();
    console.log(this.RegForm)
  }
  profile:any="";
  onFileSelected() {
    const inputNode: any = document.getElementById("ProfileName");

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.profile = e.target.result;


        document.getElementById("ProfileImg")?.setAttribute("src",this.profile)

      };
      reader.readAsDataURL(inputNode.files[0]);

    }
  }


  //////validate
  RegForm = new FormGroup({
      Fname: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      Lname: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      Age: new FormControl(null, [Validators.min(12), Validators.max(40)]),
      City: new FormControl(null,Validators.required),
      Area:new FormControl(null,Validators.required),
      buildingNumber:new FormControl(null,Validators.required),
      Phone: new FormControl(null,[Validators.required,Validators.pattern("01+[1-5\b]+[0-9\b]+$"),Validators.minLength(11),Validators.maxLength(11)]),
    })

    get Fname(){
      return this.RegForm.get('Fname') as FormControl;
    }
    get Lname(){
      return this.RegForm.get('Lname') as FormControl;
    }
    get Age(){
      return this.RegForm.get('Age') as FormControl;
    }

    get Phone(){
      return this.RegForm.get('Phone') as FormControl;
    }
    get City(){
      return this.RegForm.get('City') as FormControl;
    }
    get Area(){
      return this.RegForm.get('Area') as FormControl;
    }
    get buildingNumber(){
      return this.RegForm.get('buildingNumber') as FormControl;
    }
    userData(): User {
      return this.user = {
        fname:this.Fname.value,
        lname:this.Lname.value,
        type:"user",
        age:this.Age.value,
        city:this.City.value,
        area:this.Area.value,
        buildingID:this.buildingNumber.value,
        image:this.profile.toString(),
        phone:this.Phone.value,
        email:"",
        password:""
      }
    }
    next(){
      this.data.setItem(this.userData());
    }

}


