import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  userFirstName = '';
  userLastName = '';
  userAddress = '';
  userEmail = '';
  userPhone = '';
  userGender = '';
  userBirthday: any;

  profile: any = "";
  onFileSelected() {
    const inputNode: any = document.getElementById("ProfileName");

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.profile = e.target.result;
        //console.log(this.profile)
        document.getElementById("ProfileImg")?.setAttribute("src", this.profile)
      };
      reader.readAsDataURL(inputNode.files[0]);
    }
  }

  SaveChanges() {

  }
}
