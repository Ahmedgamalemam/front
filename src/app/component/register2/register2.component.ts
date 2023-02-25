import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavBarService } from 'src/app/core/Services/nav-bar.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component {
  constructor(public nav:NavBarService,private fb:FormBuilder){

  }
  ngOnInit(){
    this.nav.hide();
    console.log(this.RegForm)
    console.log(!this.RegForm.hasError('notmatched'))
  }
  RegForm = this.fb.group({
    Email: new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}")]),
    Password: new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{5,}$")]),
    ConfirmPassword: new FormControl(null, [Validators.required]),
  },{validators:this.passwordMatchingValidatior})
  passwordMatchingValidatior(fg: FormGroup): Validators{
    return fg.get('ConfirmPassword')?.value === fg.get('Password')?.value ? Validators.nullValidator :{notmatched: true};
  }
  get confirmPassword() {
    return this.RegForm.get('ConfirmPassword') as FormControl;
  }
  get Password() {
    return this.RegForm.get('Password') as FormControl;
  }
  get Email() {
    return this.RegForm.get('Email') as FormControl;
  }

}
