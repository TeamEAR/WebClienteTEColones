import { Component, OnInit } from '@angular/core';

const data = {
  'chart': {
    'caption': 'Top Finishers',
    'yaxisname': 'Open Play Goals',
    'palettecolors': '#E64571, #88D786',
    'plotgradientcolor': ' ',
    'theme': 'candy',
    'yaxismaxvalue': '30',
    'numdivlines': '2',
    'showlegend': '1',
    'interactivelegend': '0',
    'showvalues': '0',
    'showsum': '0'
  },
  'categories': [
    {
      'category': [
        {
          'label': 'L.Suarez'
        },
        {
          'label': 'L.Messi'
        },
        {
          'label': 'G.Higuain'
        },
        {
          'label': 'Z.Ibrahimovic'
        },
        {
          'label': 'Diego Costa'
        },
        {
          'label': 'H.Kane'
        },
        {
          'label': 'D.Alli'
        },
        {
          'label': 'A.Griezmann'
        },
        {
          'label': 'Heung-Min Son'
        },
        {
          'label': 'S.Mane'
        },
        {
          'label': 'J.King'
        },
        {
          'label': 'O.Giroud'
        }
      ]
    }
  ],
  'dataset': [
    {
      'seriesname': '2016',
      'data': [
        {
          'value': '25'
        },
        {
          'value': '18'
        },
        {
          'value': '17'
        },
        {
          'value': '15'
        },
        {
          'value': '16'
        },
        {
          'value': '14'
        },
        {
          'value': '13'
        },
        {
          'value': '11'
        },
        {
          'value': '9'
        },
        {
          'value': '10'
        },
        {
          'value': '10'
        },
        {
          'value': '7'
        }
      ]
    },
    {
      'seriesname': '2017',
      'data': [
        {
          'value': '5'
        },
        {
          'value': '8'
        },
        {
          'value': '6'
        },
        {
          'value': '3'
        },
        {
          'value': '2'
        },
        {
          'value': '3'
        },
        {
          'value': '3'
        },
        {
          'value': '4'
        },
        {
          'value': '5'
        },
        {
          'value': '4'
        },
        {
          'value': '3'
        },
        {
          'value': '4'
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-grafico-fila-apilada',
  templateUrl: './grafico-fila-apilada.component.html',
  styleUrls: ['./grafico-fila-apilada.component.scss']
})
export class GraficoFilaApiladaComponent implements OnInit {
  width = 400;
  height = 300;
  type = 'stackedbar2d';
  dataFormat = 'json';
  dataSource = data;
  constructor() { }

  ngOnInit() {
  }

}
