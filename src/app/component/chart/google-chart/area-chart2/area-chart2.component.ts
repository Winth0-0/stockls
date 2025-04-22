import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-area-chart2',
    imports: [CommonModule, Ng2GoogleChartsModule],
    templateUrl: './area-chart2.component.html',
    styleUrls: ['./area-chart2.component.scss']
})
export class AreaChart2Component {

  public areaChart2 = chartData.areaChart2;


}
