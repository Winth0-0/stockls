import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartjs';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-radar-graph',
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './radar-graph.component.html',
    styleUrl: './radar-graph.component.scss'
})
export class RadarGraphComponent {

  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphLegend = chartData.radarGraphLegend;
  public radarGraphData = chartData.radarGraphData;

}
