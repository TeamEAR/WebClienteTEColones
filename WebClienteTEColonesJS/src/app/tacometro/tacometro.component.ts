import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';

let cantidad: number;


@Component({
  selector: 'app-tacometro',
  templateUrl: './tacometro.component.html',
  styleUrls: ['./tacometro.component.scss'],
  providers: [PostService]
})
export class TacometroComponent implements OnInit {
  dataSource: Object;
  peso: IPost;
  posts: IPost;

  constructor(private postService: PostService) {
    this.obtenerPeso();

      this.dataSource = {
          'chart': {
          'caption': 'Toneladas',
          'lowerLimit': '0',
          'upperLimit': '100',
          'showValue': '1',
          'numberSuffix': '',
          'theme': 'candy',
          'showToolTip': '0'
      },
      // Gauge Data
      'colorRange': {
          'color': [{
              'minValue': '0',
              'maxValue': '50',
              'code': '#F2726F'
          }, {
              'minValue': '50',
              'maxValue': '75',
              'code': '#FFC533'
          }, {
              'minValue': '75',
              'maxValue': '100',
              'code': '#62B58F'
          }]
      },
      'dials': {
          'dial': [{
              'value': cantidad
          }]
      }
  };
}

  obtenerPeso() {
    this.postService.getPosts('Tacometro').subscribe(posts => {
      this.peso = posts;
      this.setCantidad(this.peso.Peso);
    });
  }

  getCantidad() {
    return cantidad;
  }

  setCantidad(numero: number) {
    cantidad = numero;
  }

  ngOnInit() {
  }

}

interface IPost {
  $id: string;
  Peso: number;
}
