import { Component, OnInit } from '@angular/core';
const data = {
  'chart': {
    'caption': 'TEColones entregados por mes',
    'yaxisname': 'TEColones',
    'xaxisname': 'Mes',
    'rotatelabels': '1',
    'setadaptiveymin': '1',
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
  selector: 'app-grafico-linea-simple',
  templateUrl: './grafico-linea-simple.component.html',
  styleUrls: ['./grafico-linea-simple.component.scss']
})
export class GraficoLineaSimpleComponent implements OnInit {
      width = 400;
      height = 300;
      type = 'line';
      dataFormat = 'json';
      dataSource = data;
  constructor() { }

  ngOnInit() {
  }

}
