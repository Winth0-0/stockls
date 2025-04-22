import { Component } from '@angular/core';
import { TotalrevenueChart } from '../../../../shared/data/dashboard/default/default-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-top-revenue-product',
    imports: [CommonModule, NgApexchartsModule, ClickOutsideDirective],
    templateUrl: './top-revenue-product.component.html',
    styleUrls: ['./top-revenue-product.component.scss']
})
export class TopRevenueProductComponent {

  public RevenueChart = TotalrevenueChart;
  public isopen: boolean = false;

  open() {
    this.isopen = !this.isopen
  }

  clickOutside(): void {
    this.isopen = false;
  }
}
