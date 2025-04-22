import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-combo-chart',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './combo-chart.component.html',
    styleUrls: ['./combo-chart.component.scss']
})
export class ComboChartComponent {

  public comboChart = chartData.comboChart;

}
