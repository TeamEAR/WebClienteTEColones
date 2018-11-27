import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
import * as Charts from 'fusioncharts/fusioncharts.charts';


import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { CuadriculaDashboardComponent } from './cuadricula-dashboard/cuadricula-dashboard.component';
import { GraficoColumnasSimplesComponent } from './grafico-columnas-simples/grafico-columnas-simples.component';
import { GraficoLineaSimpleComponent } from './grafico-linea-simple/grafico-linea-simple.component';
import { GraficoFilaApiladaComponent } from './grafico-fila-apilada/grafico-fila-apilada.component';
import { GraficoFilaComponent } from './grafico-fila/grafico-fila.component';
import { TopEstudiantesComponent } from './top-estudiantes/top-estudiantes.component';
// import { AccionTecolonesContenedorComponent } from './accion-tecolones-contenedor/accion-tecolones-contenedor.component';
import { AdministracionMaterialesComponent } from './administracion-materiales/administracion-materiales.component';
import { AccionTecolonesContenedorComponent } from './accion-tecolones-contenedor/accion-tecolones-contenedor.component';

// Pass the fusioncharts library and chart modules

FusionChartsModule.fcRoot(FusionCharts, Charts, Widgets, FusionTheme);



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioSesionComponent,
    NavegacionPrincipalComponent,
    TacometroComponent,
    CuadriculaDashboardComponent,
    GraficoColumnasSimplesComponent,
    GraficoLineaSimpleComponent,
    GraficoFilaApiladaComponent,
    GraficoFilaComponent,
    TopEstudiantesComponent,
    AdministracionMaterialesComponent,
    AccionTecolonesContenedorComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    FusionChartsModule,
    HttpClientModule,
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
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
