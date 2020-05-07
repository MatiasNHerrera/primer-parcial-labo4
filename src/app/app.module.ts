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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ListadoComponent,
    BuscarProductoComponent,
    DetalleProductoComponent,
    CrearProductoComponent,
    ListadoVentasComponent,
    CrearVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
