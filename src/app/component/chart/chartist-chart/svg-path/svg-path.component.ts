import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-svg-path',
    imports: [CommonModule, ChartistModule],
    templateUrl: './svg-path.component.html',
    styleUrls: ['./svg-path.component.scss']
})
export class SvgPathComponent {

  public chart2 = chartData.chart2;

}
