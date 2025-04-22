import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AreaChart1Component } from './area-chart1/area-chart1.component';
import { AreaChart2Component } from './area-chart2/area-chart2.component';
import { BarChart2Component } from './bar-chart2/bar-chart2.component';
import { ColumnChart1Component } from './column-chart1/column-chart1.component';
import { ColumnChart2Component } from './column-chart2/column-chart2.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { LinesChartComponent } from './lines-chart/lines-chart.component';
import { PieChart1Component } from './pie-chart1/pie-chart1.component';
import { PieChart2Component } from './pie-chart2/pie-chart2.component';
import { PieChart3Component } from './pie-chart3/pie-chart3.component';
import { PieChart4Component } from './pie-chart4/pie-chart4.component';


@Component({
    selector: 'app-google-chart',
    imports: [CommonModule, AreaChart1Component, AreaChart2Component, BarChart2Component, ColumnChart1Component, ColumnChart2Component, ComboChartComponent,
        LinesChartComponent, PieChart1Component, PieChart2Component, PieChart3Component, PieChart4Component],
    templateUrl: './google-chart.component.html',
    styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent {

}
