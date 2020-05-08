import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  listadoActores : Actor[] = [];
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

  getActores()
  {
    return this.listadoActores;
  }

  setActores(actor)
  {
    this.listadoActores.push(actor);
  }
}
