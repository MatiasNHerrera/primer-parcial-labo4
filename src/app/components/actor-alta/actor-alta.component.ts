import { Component, OnInit } from '@angular/core';
import { Actor } from '../../clases/actor';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {


  id = 0;
  paisParaDetalle;
  listadoPaises : []
  actor : Actor;
  constructor(private service : MiServicioService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.listadoPaises = this.service.getPaises();
    },1000);
  }

  crearActor()
  {
    this.id++;
    this.actor.id = this.id;
    this.service.setActores(this.actor);
  }

  nuevo()
  {
    this.actor = new Actor();
  }

  setActor(pais)
  {
    this.actor.paisOrigen = pais.name;

  }

  setDetalle(pais)
  {
    this.paisParaDetalle = pais;
  }

}
