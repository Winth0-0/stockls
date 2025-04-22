import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-radar-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './radar-chart.component.html',
    styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {

  public radarChart = chartData.radarChart

}
