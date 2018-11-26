import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [PostService]
})
export class RegistroComponent implements OnInit {
  sedes: IPost[];
  posts: IPost[];
  rolposts: IRol[];
  roles: IRol[];

  constructor(private postService: PostService) {
    this.obtenerSedes();
    this.obtenerRoles();
  }

  obtenerSedes() {
    this.postService.getPosts('SedeXTECs').subscribe(posts => {
      this.sedes = posts;
    });
  }

  obtenerRoles() {
    this.postService.getPosts('TipoRols').subscribe(rolposts => {
      this.roles = rolposts;
    });
  }




  ngOnInit() {
  }

}

interface IPost {
  IdSedeXTEC: number;
  NombreSedeXTEC: string;
  UbicacionSede: string;
}

interface IRol {
  NombreRol: string;
}
