import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './componentes/admin/admin.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BuscarProductoComponent } from './componentes/buscar-producto/buscar-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListadoVentasComponent } from './componentes/listado-ventas/listado-ventas.component';
import { CrearVentaComponent } from './componentes/crear-venta/crear-venta.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './components/peliculas-alta/peliculas-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';
import { PaisesListadoComponent } from './components/paises-listado/paises-listado.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ListadoComponent,
    BuscarProductoComponent,
    DetalleProductoComponent,
    CrearProductoComponent,
    ListadoVentasComponent,
    CrearVentaComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculasAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculasListadoComponent,
    PaisesListadoComponent,
    TablaPaisesComponent,
    DetallePaisComponent,
    TablaActorComponent,
    DetalleActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
