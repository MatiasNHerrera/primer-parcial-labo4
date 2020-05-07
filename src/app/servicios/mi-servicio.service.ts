import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  paises;
  constructor(private http : HttpClient) 
  {
    this.http.get("https://restcountries.eu/rest/v2/region/americas").subscribe((datos) => {
      this.paises = datos;
      console.log(datos);
    })
  }

  getPaises()
  {
    return this.paises;
  }

  setPaises(paises)
  {
    this.paises = paises;
  }
}
