import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent  } from './shared/footer/footer.component';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { AlojamientoComponent } from './pages/alojamiento/alojamiento.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { SegurosComponent } from './pages/seguros/seguros.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VuelosComponent,
    AlojamientoComponent,
    ActividadesComponent,
    PaquetesComponent,
    SegurosComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
