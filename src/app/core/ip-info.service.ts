import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPInfo } from '../model/ip-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpInfoService {
  private apiUrl: string = 'https://geo.ipify.org/api/v1?';
  private apiKey: string = 'at_kOBZFoUBmJC4XlmS1ewwqd5vKvTuz';

  constructor(private http: HttpClient) {}

  getIpInfo(): Observable<IPInfo> {
    return this.http.get<IPInfo>('https://geo.ipify.org/api/v1?apiKey=at_kOBZFoUBmJC4XlmS1ewwqd5vKvTuz&ipAddress=');
  }
}
