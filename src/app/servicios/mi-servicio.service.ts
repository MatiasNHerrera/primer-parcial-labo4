import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(private http : HttpClient) { }

  getPaises()
  {
    return this.http.get("https://restcountries.eu/rest/v2/region/americas");
  }
}
