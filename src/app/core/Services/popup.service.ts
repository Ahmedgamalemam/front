import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  makeCapitalPopup(data: any) {
    return (
      `` +
      `<div>Clinic_Name: ${data.name}</div>` +
      `<div>Address: ${data.address}</div>`+
      `<div>Phone: ${data.phone}</div>`
    );
  }
}
