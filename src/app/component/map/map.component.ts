import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { SearchService } from 'src/app/core/Services/search.service';
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

  }

  constructor(
    private markerService: MarkerService,
    public search: SearchService,
    public myActive: ActivatedRoute
  ) {}
  ngDoCheck() {
    this.markerService.id = this.myActive.snapshot.params['id'];
   // console.log(this.myActive.snapshot.params['id'])
    //this.markerService.locationMaker(this.map);
  }
  GoTo() {
    this.markerService.makeUserPostion(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    if(this.markerService.id==undefined){
      this.markerService.makeCapitalMarkers(this.map);
    }else

    this.markerService.locationMaker(this.map)
  }

  ngOnInit() {
    this.search.hide();
  }
}
