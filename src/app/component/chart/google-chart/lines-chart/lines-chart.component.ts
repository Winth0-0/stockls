import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-lines-chart',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './lines-chart.component.html',
    styleUrls: ['./lines-chart.component.scss']
})
export class LinesChartComponent {
  
  public lineChart = chartData.lineChart;

}
