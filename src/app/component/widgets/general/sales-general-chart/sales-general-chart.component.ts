import { Component } from '@angular/core';
import { generalSalesChart } from '../../../../shared/data/widgets/general-chart';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sales-general-chart',
    imports: [CommonModule, RouterModule, NgApexchartsModule, ClickOutsideDirective],
    templateUrl: './sales-general-chart.component.html',
    styleUrls: ['./sales-general-chart.component.scss']
})
export class SalesGeneralChartComponent {

  public generalSalesChartData = generalSalesChart;

  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen
  }

  clickOutside(): void {
    this.isOpen = false;
  }

}
