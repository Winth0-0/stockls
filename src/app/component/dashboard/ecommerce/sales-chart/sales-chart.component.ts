import { Component, Input } from '@angular/core';
import { salesChart } from '../../../../shared/data/dashboard/default/default-chart';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-sales-chart',
    imports: [NgApexchartsModule, ClickOutsideDirective],
    templateUrl: './sales-chart.component.html',
    styleUrls: ['./sales-chart.component.scss']
})
export class SalesChartComponent {
  
  public salesData = salesChart;
  public isopen :boolean =false;
  public isopen2 :boolean =false;

  open(){
    this.isopen = !this.isopen
  }

  open2(){
    this.isopen2 = !this.isopen2
  }

  clickOutside():void { 
    this.isopen = false;
    this.isopen2 = false;
  }

}
