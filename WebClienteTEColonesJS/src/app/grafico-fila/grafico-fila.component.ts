import { Component, OnInit } from '@angular/core';
const data = {
  'chart': {
    'caption': 'Lead sources by industry',
    'yaxisname': 'Number of Leads',
    'aligncaptionwithcanvas': '0',
    'plottooltext': '<b>$dataValue</b> leads received',
    'theme': 'fusion'
  },
  'data': [
    {
      'label': 'Travel & Leisure',
      'value': '41'
    },
    {
      'label': 'Advertising/Marketing/PR',
      'value': '39'
    },
    {
      'label': 'Other',
      'value': '38'
    },
    {
      'label': 'Real Estate',
      'value': '32'
    },
    {
      'label': 'Communications/Cable/Phone',
      'value': '26'
    },
    {
      'label': 'Construction',
      'value': '25'
    },
    {
      'label': 'Entertainment',
      'value': '25'
    },
    {
      'label': 'Staffing Firm/Full Time/Temporary',
      'value': '24'
    },
    {
      'label': 'Transportation/Logistics',
      'value': '23'
    },
    {
      'label': 'Utilities',
      'value': '22'
    },
    {
      'label': 'Aerospace/Defense Products',
      'value': '18'
    },
    {
      'label': 'Banking/Finance/Securities',
      'value': '16'
    }
  ]
};

@Component({
  selector: 'app-grafico-fila',
  templateUrl: './grafico-fila.component.html',
  styleUrls: ['./grafico-fila.component.scss']
})
export class GraficoFilaComponent implements OnInit {

  width = 400;
  height = 300;
  type = 'bar2d';
  dataFormat = 'json';
  dataSource = data;
  data = 'jhj';

  constructor() { }

  ngOnInit() {
  }

}
