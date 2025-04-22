import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AreaSpalineChartComponent } from './area-spaline-chart/area-spaline-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BasicAreaChartComponent } from './basic-area-chart/basic-area-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { Column2ChartComponent } from './column2-chart/column2-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { RadialBarChartComponent } from './radial-bar-chart/radial-bar-chart.component';
import { SteplineChartComponent } from './stepline-chart/stepline-chart.component';

@Component({
    selector: 'app-apex-chart',
    imports: [CommonModule, AreaSpalineChartComponent, BarChartComponent, BasicAreaChartComponent, BubbleChartComponent, CandlestickChartComponent,
        Column2ChartComponent, ColumnChartComponent, DonutChartComponent, MixedChartComponent, PieChartComponent, RadarChartComponent, RadialBarChartComponent,
        SteplineChartComponent],
    templateUrl: './apex-chart.component.html',
    styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent {

}
