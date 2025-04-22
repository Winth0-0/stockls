import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarsChartComponent } from './bars-chart/bars-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarGraphComponent } from './radar-graph/radar-graph.component';

@Component({
    selector: 'app-chartjs-chart',
    imports: [CommonModule, BarsChartComponent, DoughnutChartComponent, LineChartComponent,
        LineGraphComponent, PolarChartComponent, RadarGraphComponent],
    templateUrl: './chartjs-chart.component.html',
    styleUrls: ['./chartjs-chart.component.scss']
})
export class ChartjsChartComponent {

}
