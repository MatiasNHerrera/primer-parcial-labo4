import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Output() paisDeshabilitar : EventEmitter<any> = new EventEmitter<any>();
  @Input() paisDetalle;
  constructor() {
    setTimeout(() => {

    },2000);
   }

  ngOnInit(): void {
  }

  desahabilitar()
  {
    this.paisDeshabilitar.emit(this.paisDetalle);
  }

}
