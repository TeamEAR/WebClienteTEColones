import { Component, OnInit } from '@angular/core';





const data = {
  'chart': {
    'caption': 'Toneladas reciclados por mes',
    'xaxisname': 'Mes',
    'yaxisname': 'Toneladas',
    'numbersuffix': 'Kg',
    'theme': 'fusion'
  },
  'data': [
    {
      'label': 'Enero',
      'value': '290'
    },
    {
      'label': 'Febrero',
      'value': '260'
    },
    {
      'label': 'Marzo',
      'value': '180'
    },
    {
      'label': 'Abril',
      'value': '140'
    },
    {
      'label': 'Mayo',
      'value': '115'
    },
    {
      'label': 'Junio',
      'value': '100'
    },
    {
      'label': 'Julio',
      'value': '30'
    },
    {
      'label': 'Agosto',
      'value': '30'
    },
    {
      'label': 'Septiembre',
      'value': '30'
    },
    {
      'label': 'Octubre',
      'value': '30'
    },
    {
      'label': 'Noviembre',
      'value': '30'
    },
    {
      'label': 'Diciembre',
      'value': '30'
    }
  ]
};

@Component({
  selector: 'app-grafico-columnas-simples',
  templateUrl: './grafico-columnas-simples.component.html',
  styleUrls: ['./grafico-columnas-simples.component.scss']
})
export class GraficoColumnasSimplesComponent implements OnInit {

  width = 400;
  height = 250;
  type = 'Column2d';
  dataFormat = 'json';
  dataSource = data;

  constructor() { }

  ngOnInit() {
  }

}
