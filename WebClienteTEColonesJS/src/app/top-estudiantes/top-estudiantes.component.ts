import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
export interface Estudiante {
  nombre: string;
  carnet: number;
  sede: string;
  cantidad: number;
}

const ESTUDIANTES_DATA: ITop[] = [
  {Nombre: 'Allan Chacon', Carnet: '2015141007', NombreSedeXTEC: 'Cartago', Cantidad_Material: 30},
  {Nombre: 'Allan Chacon', Carnet: '2015141007', NombreSedeXTEC: 'Cartago', Cantidad_Material: 30},
  {Nombre: 'Allan Chacon', Carnet: '2015141007', NombreSedeXTEC: 'Cartago', Cantidad_Material: 30},
  {Nombre: 'Allan Chacon', Carnet: '2015141007', NombreSedeXTEC: 'Cartago', Cantidad_Material: 30},
  {Nombre: 'Allan Chacon', Carnet: '2015141007', NombreSedeXTEC: 'Cartago', Cantidad_Material: 30},
];

@Component({
  selector: 'app-top-estudiantes',
  templateUrl: './top-estudiantes.component.html',
  styleUrls: ['./top-estudiantes.component.scss'],
  providers: [PostService]
})
export class TopEstudiantesComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Carnet', 'NombreSedeXTEC', 'Cantidad_Material'];
  dataSource = ESTUDIANTES_DATA;

  posts: ITop[];
  top: ITop[];


  constructor(private postService: PostService) {
    this.obtenerTop();
  }


  obtenerTop() {
    this.postService.getPosts('Top10').subscribe(posts => {
      this.top = posts;
    });
    console.log(this.top);
  }


  ngOnInit() {
  }

}

interface ITop {
  Nombre: string;
  Carnet: string;
  NombreSedeXTEC: string;
  Cantidad_Material: number;
}
