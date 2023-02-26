import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../core/Services/marker.service';

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

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
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
      console.log(e.latlng.lat,e.latlng.lng); // e is an event object (MouseEvent in this case)
      marker = L.marker(e.latlng).addTo(this.map);
    });
  }

  constructor(private markerService: MarkerService) {}

  GoTo() {
    this.markerService.makeUserPostion(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
  }
}
