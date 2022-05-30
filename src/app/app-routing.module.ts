import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { AlojamientoComponent } from './pages/alojamiento/alojamiento.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { SegurosComponent } from './pages/seguros/seguros.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


const routes: Routes = [
  { path: 'inicio', component: VuelosComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: 'alojamiento', component: AlojamientoComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'seguros', component: SegurosComponent},
  { path: 'nosotros', component: AboutUsComponent},
  { path: '**', component: VuelosComponent },
  { path: '', component: VuelosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
