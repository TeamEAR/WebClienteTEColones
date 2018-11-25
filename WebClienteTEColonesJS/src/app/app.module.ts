import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MaterialModule } from './material';
import { NavegacionPrincipalComponent } from './navegacion-principal/navegacion-principal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { TacometroComponent } from './tacometro/tacometro.component';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioSesionComponent,
    NavegacionPrincipalComponent,
    TacometroComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    FusionChartsModule,
    RouterModule.forRoot([
      {path: 'inicio-sesion', component: InicioSesionComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'navegacion-principal', component: NavegacionPrincipalComponent}

    ]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
