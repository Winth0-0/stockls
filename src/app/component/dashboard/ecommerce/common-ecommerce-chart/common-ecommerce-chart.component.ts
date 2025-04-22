import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-common-ecommerce-chart',
    imports: [NgApexchartsModule, RouterModule, FeathericonComponent],
    templateUrl: './common-ecommerce-chart.component.html',
    styleUrl: './common-ecommerce-chart.component.scss'
})
export class CommonEcommerceChartComponent {

  @Input() data: any;

}
