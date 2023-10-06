import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild('host', { static: true }) host: ElementRef<HTMLDivElement> | undefined;

  @Input() coords: number[] | null = [];
  @Input() zoom: number = 5;

  map!: L.Map;
  marker!: L.Marker;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['coords'] && changes['coords'].firstChange) {

      const coords: L.LatLngExpression = this.coords as L.LatLngExpression;
      this.map = L.map(this.host!.nativeElement, { zoomControl: false}).setView(coords, this.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        this.map
      );

      const customIcon = L.icon({
        iconUrl: 'assets/images/icon-location.svg',
        iconSize: [46, 55],
        iconAnchor: [22, 55],
        popupAnchor: [0, -32],
      });

      this.marker = L.marker(coords, { icon: customIcon })
        .addTo(this.map)

    }

    if (changes['coords'] && !changes['coords'].firstChange) {
      const coords: L.LatLngExpression = this.coords as L.LatLngExpression;
      this.map.setView(coords);
      this.marker.setLatLng(coords);
    }

    if (changes['zoom']) {
      this.map.setZoom(changes['zoom'].currentValue);
    }
  }
}
