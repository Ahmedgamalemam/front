import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public nav:NavBarService){ }
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
        //console.log(this.profile)
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
      Address: new FormControl(null,Validators.required),
      Phone: new FormControl(null,[Validators.required,Validators.pattern("01+[1-5\b]+[0-9\b]+$"),Validators.minLength(11),Validators.maxLength(11)]),
    })

}


