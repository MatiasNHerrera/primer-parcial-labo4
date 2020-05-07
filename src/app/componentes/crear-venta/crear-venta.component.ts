import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/entidad';
import { Venta } from 'src/app/clases/venta';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {

  @Output() ventaCreada : EventEmitter<any> = new EventEmitter<any>();

  venta : Venta;

  constructor() { }

  ngOnInit(): void {
  }

  nuevo()
  {
    this.venta = new Venta();
  }

  crearVenta()
  {
      if(this.validar())
      {
        this.venta.rutaDeFoto = "../../../assets/imagenes/defecto.jpg";
        this.ventaCreada.emit(this.venta);
        this.venta = null;
      }
      else
      {
        console.log("error en los campos, no validos");
      }
  }

  validar() : boolean
  {
      let retorno : boolean = false;

      if(!isNaN(this.venta.cantidad) && this.venta.precio > 0 && this.venta.precio > 0 
        && this.venta.precio <= 1000 && !isNaN(this.venta.precio))
      {
          retorno = true;
      }

      return retorno;
  }

}
