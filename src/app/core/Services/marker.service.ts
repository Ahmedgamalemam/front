import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import { ActivatedRoute } from '@angular/router';
import { ClinicService } from './clinic.service';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  public coordinates: any;
  public id!: number;
  public lat: number = 0;
  public log: number = 0;
  public text: any;

  constructor(
    private http: HttpClient,
    private PopupService: PopupService,
    public location: ClinicService,
    public myActive: ActivatedRoute
  ) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.userpoistion);
    }
  }

  locationMaker(map: L.Map): void {
    console.log(this.id);
    this.location.getByID(this.id).subscribe((responce: any) => {
      this.lat = responce.lat;
      this.log = responce.long;
      this.text = { name: responce.name, address: responce.address,phone:responce.phone };
      console.log(this.lat, this.log);
    });
    console.log(this.text);
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
    map.flyTo([this.lat, this.log], 16);
    const marker = L.marker([this.lat, this.log]);
    marker.bindPopup(this.PopupService.makeCapitalPopup(this.text));
    marker.addTo(map);
  }
  userpoistion = (position: any) => {
    this.coordinates = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    console.log(this.coordinates.latitude, this.coordinates.longitude);
  };
  makeUserPostion(map: L.Map): void {
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/home.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [50, 51],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;
    map.flyTo([this.coordinates.latitude, this.coordinates.longitude], 16);
    const marker = L.marker([
      this.coordinates.latitude,
      this.coordinates.longitude,
    ]);
    marker.bindPopup('You are Here');
    marker.addTo(map);
  }

  makeCapitalMarkers(map: L.Map): void {
    this.location.getAll().subscribe((responce: any) => {
      responce.forEach((element: any) => {
        this.lat = element.lat;
        this.log = element.long;
        this.text = { name: element.name, address: element.address,phone:element.phone };
        console.log(this.lat, this.log);
        const marker = L.marker([this.lat, this.log]);
        marker.bindPopup(this.PopupService.makeCapitalPopup(this.text));
        marker.addTo(map);
      });
    });
  }
}
