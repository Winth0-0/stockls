import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-pie-chart2',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './pie-chart2.component.html',
    styleUrls: ['./pie-chart2.component.scss']
})
export class PieChart2Component {

  public pieChart2 = chartData.pieChart2;

}
