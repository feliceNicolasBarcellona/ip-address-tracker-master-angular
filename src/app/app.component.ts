import { Component, OnInit } from '@angular/core';
import { IPInfo } from './model/ip-info';
import { IpInfoService } from './core/ip-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  zoom: number = 20;
  location: number[] = [0, 0];
  ipOrDomain: string | null = '';
  searchedIp: string = '';

  result: IPInfo | null = null;

  constructor(private IpInfoService: IpInfoService) {}

  ngOnInit() {
    this.IpInfoService.getIpInfo(this.searchedIp).subscribe(
      (res: IPInfo) => {
        this.result = res;

        if (res.location) {
          const lat = res.location.lat;
          const lng = res.location.lng;
          this.location = [lat, lng];
        }
      },
      (error) => {
        console.error('Errore nella chiamata HTTP', error);
      }
    );
  }

  getIpOrDomain(ipOrDomain?: string) {
    console.log(ipOrDomain);
    this.searchedIp = ipOrDomain || '';
  }
}
