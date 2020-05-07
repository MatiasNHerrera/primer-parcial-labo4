import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listadoPaises;

  constructor( private service : MiServicioService) { }

  ngOnInit(): void {
    this.service.getPaises().subscribe((paises) => {
      this.listadoPaises = paises;
      console.log(this.listadoPaises);
    });
  }

}
