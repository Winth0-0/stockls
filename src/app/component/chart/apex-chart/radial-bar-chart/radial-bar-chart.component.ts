import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-radial-bar-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './radial-bar-chart.component.html',
    styleUrls: ['./radial-bar-chart.component.scss']
})
export class RadialBarChartComponent {

  public radialBarChart = chartData.radialBarChart

}
