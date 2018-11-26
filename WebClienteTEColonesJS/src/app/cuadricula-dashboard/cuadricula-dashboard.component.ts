import { Component, OnInit } from '@angular/core';

export interface Estudiante {
  nombre: string;
  carnet: number;
  sede: string;
  cantidad: number;
}

const ESTUDIANTES_DATA: Estudiante[] = [
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30},
  {nombre: 'Allan Chacon', carnet: 2015141007, sede: 'Cartago', cantidad: 30}
];


@Component({
  selector: 'app-cuadricula-dashboard',
  templateUrl: './cuadricula-dashboard.component.html',
  styleUrls: ['./cuadricula-dashboard.component.scss']
})
export class CuadriculaDashboardComponent implements OnInit {

  columnasDesplegadas: string[] = ['nombre', 'carnet', 'sede', 'cantidad'];
  fuenteInformacion = ESTUDIANTES_DATA;

  constructor() { }

  ngOnInit() {
  }

}
