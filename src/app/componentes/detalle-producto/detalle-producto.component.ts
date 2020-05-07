import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/clases/entidad';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() productoDetalle : Producto;

  constructor() { }

  ngOnInit(): void {
  }

  limpiar()
  {
    this.productoDetalle = undefined;
  }

}
