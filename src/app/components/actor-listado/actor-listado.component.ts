import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  paisParaDetalle
  actorParaDetalle : Actor;
  listadoActores;
  constructor(private servicio : MiServicioService) { }

  ngOnInit(): void {
    this.listadoActores = this.servicio.getActores();
  }


  setDetalle(detalle : Actor)
  {
    this.actorParaDetalle = detalle;
    this.paisParaDetalle = this.actorParaDetalle.paisOrigen;
    console.log(detalle);
  }

}
