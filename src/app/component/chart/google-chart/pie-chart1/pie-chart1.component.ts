import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-pie-chart1',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './pie-chart1.component.html',
    styleUrls: ['./pie-chart1.component.scss']
})
export class PieChart1Component {

  public pieChart1 = chartData.pieChart1;

}
