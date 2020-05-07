import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Producto } from 'src/app/clases/entidad';
import { createElementCssSelector } from '@angular/compiler';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  @Output() productoCreado : EventEmitter<any> = new EventEmitter<any>();

  producto : Producto;
  idProd : number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  nuevo()
  {
    this.producto = new Producto();
  }

  crearProducto()
  {
      if(this.validar())
      {
        this.idProd++
        this.producto.id = this.idProd;
        this.producto.rutaDeFoto = "../../../assets/imagenes/defecto.jpg";
        this.productoCreado.emit(this.producto);
        this.producto = null;
      }
      else
      {
        console.log("error en los campos, no validos");
      }
  }

  validar() : boolean
  {
      let retorno : boolean = false;

      if((this.producto.tipo.toLowerCase() == "solido" || this.producto.tipo.toLowerCase() == "liquido") 
      && this.producto.precio > 0 && this.producto.precio <= 1000 && !isNaN(this.producto.precio))
      {
          retorno = true;
      }

      return retorno;
  }

}
