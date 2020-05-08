import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { PaisesListadoComponent } from './components/paises-listado/paises-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';



const routes: Routes = 
[
  { path: '', redirectTo:'bienvenido', pathMatch: 'full'},
  { path: 'bienvenido' , component:  BienvenidoComponent },
  { path: 'paises/listado' , component:  PaisesListadoComponent},
  { path: 'actor/alta' , component:  ActorAltaComponent},
  { path: 'actor/listado' , component:  ActorListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
