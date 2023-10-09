import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPInfo } from '../model/ip-info';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IpInfoService {
  private apiUrl: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getIpInfo(ipAddress: string): Observable<IPInfo> {
    const params = new HttpParams({ fromObject: { apiKey: this.apiKey, ipAddress: ipAddress}});
    return this.http.get<IPInfo>(`${this.apiUrl}`, {params});
  }
}
