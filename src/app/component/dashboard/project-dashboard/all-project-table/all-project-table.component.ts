import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as chartData from '../../../../shared/data/dashboard/ecommerce/ecommerce-chart';
import { CommonWidgetChartComponent } from './common-widget-chart/common-widget-chart.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-all-project-table',
    imports: [CommonModule, RouterModule, CommonWidgetChartComponent, ClickOutsideDirective],
    templateUrl: './all-project-table.component.html',
    styleUrls: ['./all-project-table.component.scss']
})

export class AllProjectTableComponent {

  public projectData = chartData.projectTable;
  public openid!: number;

  openMenu(id: number) {
    this.projectData.filter((data) => {
      if (data.id == id) {
        data.isActive = !data.isActive;
      }
    })
  }
}
