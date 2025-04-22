import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-area-spaline-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './area-spaline-chart.component.html',
    styleUrls: ['./area-spaline-chart.component.scss']
})
export class AreaSpalineChartComponent {

  public areaSpalineChart = chartData.areaSpalineChart;

}
