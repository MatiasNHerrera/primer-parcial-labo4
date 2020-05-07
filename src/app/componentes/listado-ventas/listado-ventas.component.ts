import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Venta } from 'src/app/clases/venta';

@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.css']
})
export class ListadoVentasComponent implements OnInit {

  @Output() ventaParaBorrar : EventEmitter<any> = new EventEmitter<any>();
  @Input() listadoVenta : Venta[];

  constructor() { }

  ngOnInit(): void {
  }

  borrarVenta(venta : Venta)
  {
    this.ventaParaBorrar.emit(venta);
  }

}
