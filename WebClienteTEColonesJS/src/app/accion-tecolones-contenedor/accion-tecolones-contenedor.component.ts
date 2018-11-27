import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';


@Component({
  selector: 'app-accion-tecolones-contenedor',
  templateUrl: './accion-tecolones-contenedor.component.html',
  styleUrls: ['./accion-tecolones-contenedor.component.scss'],
  providers: [PostService]
})
export class AccionTecolonesContenedorComponent implements OnInit {

  posts: Ibeneficio[];
  beneficios: Ibeneficio[];
  constructor(private postService: PostService) {
    this.obtenerBeneficios();
  }

  ngOnInit() {
  }

  obtenerBeneficios() {
    this.postService.getPosts('TipoBeneficios').subscribe(posts => {
      this.beneficios = posts;
    });
  }

}

interface Ibeneficio {
  NombreBeneficio: string;
}
