export interface Geolocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

export interface AS {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

export interface Proxy {
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
}

export interface IPInfo {
  ip: string;
  location: Geolocation;
  as: AS;
  isp: string;
  proxy: Proxy;
}

