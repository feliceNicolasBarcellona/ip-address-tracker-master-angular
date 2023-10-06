import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  zoom: number = 20;
  location: number[] = [];
  ipOrDomain: string | null = null

  result: any[] = [{
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 32.69922,
        "lng": -117.11281,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    },
}]


ngOnInit(): void {
  if (this.result.length > 0) {
    const lat = this.result[0].location.lat;
    const lng = this.result[0].location.lng;

    this.location = [lat, lng];
  }
}

getIpOrDomain(ipOrDomain: string){
  console.log(ipOrDomain);

}

}
