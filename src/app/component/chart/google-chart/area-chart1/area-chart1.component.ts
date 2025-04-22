import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-area-chart1',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './area-chart1.component.html',
    styleUrls: ['./area-chart1.component.scss']
})
export class AreaChart1Component {

  public areaChart1 = chartData.areaChart1;

}
