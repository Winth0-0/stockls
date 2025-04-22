import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-mixed-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './mixed-chart.component.html',
    styleUrls: ['./mixed-chart.component.scss']
})
export class MixedChartComponent {

  public mixedChart = chartData.mixedChart


}
