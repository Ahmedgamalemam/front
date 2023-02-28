import { Component } from '@angular/core';
import { SearchService } from 'src/app/core/Services/search.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  constructor(public search:SearchService){

  }
  ngOnInit() {
    this.search.hide()
  }

}
