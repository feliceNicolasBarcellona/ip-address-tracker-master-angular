import { Component, OnInit } from '@angular/core';
import { IPInfo } from './model/ip-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  zoom: number = 20;
  location: number[] = [];
  ipOrDomain: string | null = null;

  result: IPInfo[] = [{
    ip: "101.56.162.221",
    location: {
      country: "IT",
      region: "Sicilia",
      city: "Santo Stefano Quisquina",
      lat: 37.62606,
      lng: 13.48976,
      postalCode: "",
      timezone: "+02:00",
      geonameId: 2523247,
    },
    as: {
      asn: 210278,
      name: "SKYIT-BB",
      route: "101.56.128.0\/18",
      domain: "sky.uk",
      type: "Cable\/DSL\/ISP",
    },
    isp: "Sky Italia srl",
    proxy: {
      proxy: false,
      vpn: false,
      tor: false,
    },
  }];

  ngOnInit(): void {
    if (this.result.length > 0) {
      const lat = this.result[0].location.lat;
      const lng = this.result[0].location.lng;

      this.location = [lat, lng];
    }
  }

  getIpOrDomain(ipOrDomain: string) {
    console.log(ipOrDomain);
  }
}
