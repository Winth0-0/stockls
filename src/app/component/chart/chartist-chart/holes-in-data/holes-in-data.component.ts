import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-holes-in-data',
    imports: [CommonModule, ChartistModule],
    templateUrl: './holes-in-data.component.html',
    styleUrls: ['./holes-in-data.component.scss']
})
export class HolesInDataComponent {

  public chart11 = chartData.chart11;

}
