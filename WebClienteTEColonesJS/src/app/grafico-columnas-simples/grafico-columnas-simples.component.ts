import { Component, OnInit } from '@angular/core';





const data = {
  'chart': {
    'caption': 'Countries With Most Oil Reserves [2017-18]',
    'subcaption': 'In MMbbl = One Million barrels',
    'xaxisname': 'Country',
    'yaxisname': 'Reserves (MMbbl)',
    'numbersuffix': 'K',
    'theme': 'fusion'
  },
  'data': [
    {
      'label': 'Venezuela',
      'value': '290'
    },
    {
      'label': 'Saudi',
      'value': '260'
    },
    {
      'label': 'Canada',
      'value': '180'
    },
    {
      'label': 'Iran',
      'value': '140'
    },
    {
      'label': 'Russia',
      'value': '115'
    },
    {
      'label': 'UAE',
      'value': '100'
    },
    {
      'label': 'US',
      'value': '30'
    },
    {
      'label': 'China',
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
