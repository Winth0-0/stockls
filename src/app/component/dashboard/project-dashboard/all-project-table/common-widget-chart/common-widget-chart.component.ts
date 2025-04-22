import { Component, Input } from '@angular/core';
import { ChartOptions } from '../../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-common-widget-chart',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './common-widget-chart.component.html',
    styleUrls: ['./common-widget-chart.component.scss']
})
export class CommonWidgetChartComponent {

  @Input() data: ChartOptions| any;

}
