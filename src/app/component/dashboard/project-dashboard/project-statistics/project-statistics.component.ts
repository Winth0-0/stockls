import { Component } from '@angular/core';
import { ProjectStatistics } from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-project-statistics',
    imports: [CommonModule, RouterModule, NgApexchartsModule, ClickOutsideDirective],
    templateUrl: './project-statistics.component.html',
    styleUrls: ['./project-statistics.component.scss']
})
export class ProjectStatisticsComponent {

  public projectStatisticsData = ProjectStatistics;
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }


}
