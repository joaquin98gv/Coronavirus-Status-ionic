import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class CoronavirusService {

  dataBolivia: any = [];
  dataCuba: any = [];

  constructor( private http: HttpClient ) {
    // this.getCountry('cuba').subscribe((resp: any) => this.dataCuba = resp.reverse());
  }

  getCountry(country: string) {
    return this.http.get(environment.urlBase + `dayone/country/${country}`);
  }

  async getBolivia() {
    if (this.dataBolivia.length === 0 ) {
      this.getCountry('bolivia').subscribe((resp: any) => {
        this.dataBolivia = resp.reverse();
        return resp.reverse();
      });
    } else {
      return this.dataBolivia;
    }
  }

  async getCuba() {
    return await this.dataBolivia;
  }

}
