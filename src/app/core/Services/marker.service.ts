import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';



@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  public coordinates:any

  constructor(private http: HttpClient,private PopupService:PopupService) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.userpoistion);
    }

  }
  userpoistion=(position:any)=> {
      this.coordinates=   {
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    };
    console.log(this.coordinates.latitude,this.coordinates.longitude);

  }
makeUserPostion(map:L.Map):void{
  const iconRetinaUrl = 'assets/marker-icon-2x.png';
  const iconUrl = 'assets/marker-icon.png';
  const shadowUrl = 'assets/marker-shadow.png';
  const iconDefault = L.icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [26, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });
  L.Marker.prototype.options.icon = iconDefault;
  map.flyTo([this.coordinates.latitude,this.coordinates.longitude],16);
  const marker = L.marker([this.coordinates.latitude,this.coordinates.longitude]);
  marker.bindPopup("You are Here");
        marker.addTo(map);


}

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
        marker.bindPopup(this.PopupService.makeCapitalPopup(c.properties));
        marker.addTo(map);

      }


    });


  }
}
