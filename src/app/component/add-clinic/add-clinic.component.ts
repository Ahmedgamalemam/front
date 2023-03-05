import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Clinic } from 'src/app/core/models/clinic';
import { AlertService } from 'src/app/core/Services/alert.service';
import { ClinicService } from 'src/app/core/Services/ModelServices/clinic.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css'],
})
export class AddClinicComponent {
  clinic!: Clinic;
  lat!: string;
  long!: string;

  constructor(
    private myservice: ClinicService,
    private alertify: AlertService
  ) {
    console.log(this.addform);
  }

  profile: any = '';
  onFileSelected() {
    const inputNode: any = document.getElementById('ProfileName');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.profile = e.target.result;

        document
          .getElementById('ProfileImg')
          ?.setAttribute('src', this.profile);
      };
      reader.readAsDataURL(inputNode.files[0]);
    }
  }

  addform = new FormGroup({
    clinicName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    clinicAddress: new FormControl(null, [Validators.required]),
    clinicPhone: new FormControl(null, [Validators.required]),
  });
  get clinicName() {
    return this.addform.get('clinicName') as FormControl;
  }
  get clinicAddress() {
    return this.addform.get('clinicAddress') as FormControl;
  }
  get clinicPhone() {
    return this.addform.get('clinicPhone') as FormControl;
  }

  ClinicData(): Clinic {
    return (this.clinic = {
      id: 0,
      name: this.clinicName.value,
      address: this.clinicAddress.value,
      phone: this.clinicPhone.value,
      lat: this.lat.toString(),
      long: this.long.toString(),
    });
  }
  add() {
    this.myservice.AddClinic(this.ClinicData()).subscribe((data: any) => {
      console.log(data);
    });
    this.alertify.success('Congrats, you have successfully added an item');
    console.log(this.ClinicData());
    console.log(this.profile);
  }
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [30.06263, 31.24967],

      //center: [ 39.8282, -98.5795 ],
      zoom: 10,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    var marker: any;
    this.map.on('click', (e: any) => {
      const iconRetinaUrl = 'assets/icon.png';
      const iconUrl = 'assets/icon.png';
      const shadowUrl = 'assets/marker-shadow.png';
      const iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [35, 40],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      });
      L.Marker.prototype.options.icon = iconDefault;
      if (marker) this.map.removeLayer(marker);
      this.lat = e.latlng.lat;
      this.long = e.latlng.lng;
      console.log(e.latlng.lat, e.latlng.lng); // e is an event object (MouseEvent in this case)
      marker = L.marker(e.latlng).addTo(this.map);
    });
  }
  ngAfterViewInit(): void {
    this.initMap();
  }
}
