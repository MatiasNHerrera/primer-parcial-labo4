import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisActor : EventEmitter<any> = new EventEmitter<any>();
  @Output() detallePais : EventEmitter<any> = new EventEmitter<any>();
  @Input() listadoPaises;

  constructor( private service : MiServicioService) { 
  }

  ngOnInit(): void {
  }

  detalle(pais)
  {
    this.detallePais.emit(pais);
  }

  seleccionar(entidad)
  {
    this.paisActor.emit(entidad);
  }

}
