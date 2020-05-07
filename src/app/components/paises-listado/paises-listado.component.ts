import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  paisParaDetalle;
  listadoPaises : any[];
  constructor(private service : MiServicioService) {
    setTimeout(() => {
      this.listadoPaises = this.service.getPaises();
      console.log(this.listadoPaises);
    },1000)
   }

  ngOnInit(): void {
  
  }

  setDetalle(pais)
  {
    this.paisParaDetalle = pais;
  }

  deshabilitarPais(pais)
  {
    let i = this.listadoPaises.indexOf(pais);
    this.listadoPaises.splice(i, 1);
    this.service.setPaises(this.listadoPaises);
  }

}
