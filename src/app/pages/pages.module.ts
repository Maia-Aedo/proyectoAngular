import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesComponent } from './actividades/actividades.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { SegurosComponent } from './seguros/seguros.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    ActividadesComponent,
    AlojamientoComponent,
    PaquetesComponent,
    SegurosComponent,
    VuelosComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
