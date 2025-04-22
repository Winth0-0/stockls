import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-bi-polar-line-chart-area',
    imports: [CommonModule, ChartistModule],
    templateUrl: './bi-polar-line-chart-area.component.html',
    styleUrls: ['./bi-polar-line-chart-area.component.scss']
})
export class BiPolarLineChartAreaComponent {

  public chart4 = chartData.chart4;

}
