import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/entidad';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Output() borrarProd : EventEmitter<any> = new EventEmitter<any>();
  @Input() listadoEntidad : Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  borrarProducto(producto : Producto)
  {
    this.borrarProd.emit(producto);
  }

}
