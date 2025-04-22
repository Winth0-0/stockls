import { Component } from '@angular/core';
import { monthlyHistoryData } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-monthly-history',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './monthly-history.component.html',
    styleUrls: ['./monthly-history.component.scss']
})
export class MonthlyHistoryComponent {

  public MonthlyHistoryData = monthlyHistoryData;

}
