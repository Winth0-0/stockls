import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-bi-polar-bar-chart',
    imports: [CommonModule, ChartistModule],
    templateUrl: './bi-polar-bar-chart.component.html',
    styleUrls: ['./bi-polar-bar-chart.component.scss']
})
export class BiPolarBarChartComponent {

  public chart6 = chartData.chart6;

}
