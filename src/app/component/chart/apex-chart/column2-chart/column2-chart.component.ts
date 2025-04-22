import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-column2-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './column2-chart.component.html',
    styleUrls: ['./column2-chart.component.scss']
})
export class Column2ChartComponent {

  public columnChart2 = chartData.columnChart2;

}
