import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdvancedSmilComponent } from './advanced-smil/advanced-smil.component';
import { BiPolarBarChartComponent } from './bi-polar-bar-chart/bi-polar-bar-chart.component';
import { BiPolarLineChartAreaComponent } from './bi-polar-line-chart-area/bi-polar-line-chart-area.component';
import { DountSvgAnimateComponent } from './dount-svg-animate/dount-svg-animate.component';
import { ExtremeResponsiveConfigantionComponent } from './extreme-responsive-configantion/extreme-responsive-configantion.component';
import { FilledHolesInDataComponent } from './filled-holes-in-data/filled-holes-in-data.component';
import { HolesInDataComponent } from './holes-in-data/holes-in-data.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { LineChartAreaComponent } from './line-chart-area/line-chart-area.component';
import { SimpleLineChartComponent } from './simple-line-chart/simple-line-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { SvgPathComponent } from './svg-path/svg-path.component';

@Component({
    selector: 'app-chartist-chart',
    imports: [CommonModule, AdvancedSmilComponent, BiPolarBarChartComponent, BiPolarLineChartAreaComponent, DountSvgAnimateComponent,
        ExtremeResponsiveConfigantionComponent, FilledHolesInDataComponent, HolesInDataComponent, HorizontalBarChartComponent, LineChartAreaComponent,
        SimpleLineChartComponent, StackedBarChartComponent, SvgPathComponent],
    templateUrl: './chartist-chart.component.html',
    styleUrls: ['./chartist-chart.component.scss']
})
export class ChartistChartComponent {

}
