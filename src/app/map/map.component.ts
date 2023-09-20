import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as geojson from 'geojson';
import { geoJSON } from 'leaflet';
// declare const L: any; // --> Works
const myLines = [{
  "type": "Polygon",
       "coordinates": [[
          [105.02517700195314, 19.433801201715198],
           [106.23367309570314, 18.852796311610007],
           [105.61843872070314, 7.768472031139744]
           
       ]]
}];
const myPoli = [[
  { "type": "Feature",
         "geometry": {
           "type": "Polygon",
           "coordinates": [
             [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
               [100.0, 1.0], [100.0, 0.0] ]
             ]
         },
         "properties": {
           "prop0": "value0",
           "prop1": {"this": "that"}
           }
         }
]];
const myStyle = {
  "color": "green",
  "weight": 5,
  "opacity": 0.65
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  private map: any;
  drawnItems: any;
  

  ngOnInit(): void {
    this.map = L.map('map', {
      center: [ 33.939231, -118.195916 ],
      zoom: 9
    });

    // var layerPostalcodes=L.geoJSON(myPoli, {
    //   style: myStyle
    // }).addTo(this.map);
    // this.drawnItems.addLayer(layerPostalcodes);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);


  }
  



  constructor() { }

  // ngAfterViewInit(): void {
  //   this.initMap();
  // }
  // ngOnInit() {
  //   const zc_poly_group = new L.FeatureGroup();
  //   $.getJSON('https://s3.amazonaws.com/gm-zdm/gj/zc/US_ZC_90001.geojson',function(Data){var f = L.geoJson( Data,{style: areaStyle('90001')}).bindPopup('<a href="90001">ZIP Code 90001</a>');});
  //   $.getJSON('https://s3.amazonaws.com/gm-zdm/gj/zc/US_ZC_90002.geojson',function(Data){var f = L.geoJson( Data,{style: areaStyle('90002')}).bindPopup('<a href="90002">ZIP Code 90002</a>');});
  // }
}
