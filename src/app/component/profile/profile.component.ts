import { Component } from '@angular/core';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
onFileSelected() {
throw new Error('Method not implemented.');
}
constructor(public search:SearchService){

}
ngOnInit() {
  this.search.hide()
}


}
