import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { raderchart } from '../../../../shared/data/dashboard/online-course/online-course-chart';

@Component({
    selector: 'app-chart-rader',
    imports: [NgApexchartsModule],
    templateUrl: './chart-rader.component.html',
    styleUrls: ['./chart-rader.component.scss']
})
export class ChartRaderComponent {

  public raderchartData = raderchart;

}
