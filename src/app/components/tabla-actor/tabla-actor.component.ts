import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Output() actorDetalle : EventEmitter<any> = new EventEmitter<any>();
  @Input() listadoActores : Actor[];
  constructor() { }

  ngOnInit(): void {
  }

  detalle(entidad)
  {
    this.actorDetalle.emit(entidad);
  }

}
