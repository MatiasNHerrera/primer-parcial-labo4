import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Producto } from 'src/app/clases/entidad';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  @Output() elementoBuscado : EventEmitter<any> = new EventEmitter<any>();
  @Input() listadoProductos : Producto[];
  descripcion : string;

  constructor() { }

  ngOnInit(): void {

  }

  buscarProducto()
  {
      let productosActualizados = JSON.parse(localStorage.getItem("productos"));
      
      for(let prod of productosActualizados)
      {
        if(prod.descripcion == this.descripcion)
        {
          this.elementoBuscado.emit(prod);
          break;
        }
        else
        {
          console.log("no se encontro");
        }
      }
  }

}
