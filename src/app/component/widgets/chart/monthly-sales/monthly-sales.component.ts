import { Component } from '@angular/core';
import { MonthlySales } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-monthly-sales',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './monthly-sales.component.html',
    styleUrls: ['./monthly-sales.component.scss']
})
export class MonthlySalesComponent {

  public MonthlySalesChart = MonthlySales;

}
