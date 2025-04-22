import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-extreme-responsive-configantion',
    imports: [CommonModule, ChartistModule],
    templateUrl: './extreme-responsive-configantion.component.html',
    styleUrls: ['./extreme-responsive-configantion.component.scss']
})
export class ExtremeResponsiveConfigantionComponent {

  public chart9 = chartData.chart9;

}
