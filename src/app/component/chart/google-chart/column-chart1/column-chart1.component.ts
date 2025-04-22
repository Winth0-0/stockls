import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-column-chart1',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './column-chart1.component.html',
    styleUrls: ['./column-chart1.component.scss']
})
export class ColumnChart1Component {
  
  public columnChart1 = chartData.columnChart1;


}
