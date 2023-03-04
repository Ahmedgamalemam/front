import { Component } from '@angular/core';
import { PetSService } from 'src/app/core/pet-s.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  from_cart = new Array();
  totalprice: Number = 0;
  constructor(public petservice: PetSService) {
    this.from_cart = this.petservice.getbuy_now();
    this.totalprice = this.petservice.gettotal_price();
  }
}
