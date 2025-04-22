import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/chartist-chart';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-filled-holes-in-data',
    imports: [CommonModule, ChartistModule],
    templateUrl: './filled-holes-in-data.component.html',
    styleUrls: ['./filled-holes-in-data.component.scss']
})
export class FilledHolesInDataComponent {

  public chart12 = chartData.chart12;

}
