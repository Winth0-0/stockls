import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-dount-svg-animate',
    imports: [CommonModule, ChartistModule],
    templateUrl: './dount-svg-animate.component.html',
    styleUrls: ['./dount-svg-animate.component.scss']
})
export class DountSvgAnimateComponent {

  public chart3 = chartData.chart3;

}
