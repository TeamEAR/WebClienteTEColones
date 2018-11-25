import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tacometro',
  templateUrl: './tacometro.component.html',
  styleUrls: ['./tacometro.component.scss']
})
export class TacometroComponent implements OnInit {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      'chart': {
      'caption': 'Erick se la come',
      'lowerLimit': '0',
      'upperLimit': '100',
      'showValue': '1',
      'numberSuffix': '%',
      'theme': 'carbon',
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
          'value': '100'
      }]
  }
};
  }

  ngOnInit() {
  }

}
