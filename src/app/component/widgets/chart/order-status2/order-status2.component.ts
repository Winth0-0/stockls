import { Component } from '@angular/core';
import { OderStatus } from '../../../../shared/data/widgets/chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-order-status2',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './order-status2.component.html',
    styleUrls: ['./order-status2.component.scss']
})
export class OrderStatus2Component {

  public orderStatusData = OderStatus;

}


