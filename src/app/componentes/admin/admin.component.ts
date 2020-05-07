import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Producto } from '../../clases/entidad';
import { Venta } from 'src/app/clases/venta';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  queMostrar : string = "productos";

  productoParaMostrar: Producto;

  listadoVenta : Venta[] = [{ id: 1, descripcion: "tomate", tipo : "solido", fechaDeVencimiento : "20/05/2020", precio: 15,
  rutaDeFoto: "../../../assets/imagenes/tomate.jpg",fechaVenta : "20/09/20", cantidad : 200}]

  listadoEntidad : Producto[] = [
    { id: 1, descripcion: "tomate", tipo : "solido", fechaDeVencimiento : "20/05/2020", precio: 15, rutaDeFoto: "../../../assets/imagenes/tomate.jpg"},
    { id: 2, descripcion: "yogurt", tipo : "liquido", fechaDeVencimiento : "08/07/2020", precio: 50, rutaDeFoto: "../../../assets/imagenes/yogurt.jpg"},
    { id: 3, descripcion: "chocolate", tipo : "solido", fechaDeVencimiento : "13/010/2020", precio: 110, rutaDeFoto: "../../../assets/imagenes/chocolate.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("productos", JSON.stringify(this.listadoEntidad));
  }

  eliminarProducto(producto : Producto)
  {
    let i = this.listadoEntidad.indexOf(producto)
    this.listadoEntidad.splice(i ,1);
  }

  mostrarDetalles(pr : Producto)
  {
    this.productoParaMostrar = pr;
  }

  crearProducto(producto: Producto)
  {
    this.listadoEntidad.push(producto);
    localStorage.removeItem("productos");
    localStorage.setItem("productos", JSON.stringify(this.listadoEntidad));
  }

  cambiarVista(cambio : string)
  {
     this.queMostrar = cambio;
  }

  crearVenta(venta : Venta)
  {
    this.listadoVenta.push(venta);
  }

  borrarVenta(venta : Venta)
  {
    let i = this.listadoVenta.indexOf(venta)
    this.listadoVenta.splice(i, 1);
  }

}
