import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import *as chartData from '../../../shared/data/widgets/chart'
import { CommonWidgetsChartComponent } from './common-widgets-chart/common-widgets-chart.component';
import { CryptoAnnotationsComponent } from './crypto-annotations/crypto-annotations.component';
import { CryptocurrencyPricesComponent } from './cryptocurrency-prices/cryptocurrency-prices.component';
import { FinanceComponent } from './finance/finance.component';
import { LiveProductsComponent } from './live-products/live-products.component';
import { MonthlyHistoryComponent } from './monthly-history/monthly-history.component';
import { MonthlySalesComponent } from './monthly-sales/monthly-sales.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderStatus2Component } from './order-status2/order-status2.component';
import { SkillStatusComponent } from './skill-status/skill-status.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { TurnOverComponent } from './turn-over/turn-over.component';
import { UsesComponent } from './uses/uses.component';

@Component({
    selector: 'app-chart',
    imports: [CommonModule, CommonWidgetsChartComponent, CryptoAnnotationsComponent, CryptocurrencyPricesComponent, FinanceComponent,
        LiveProductsComponent, MonthlyHistoryComponent, MonthlySalesComponent, OrderStatusComponent, OrderStatus2Component, SkillStatusComponent,
        StockMarketComponent, TurnOverComponent, UsesComponent],
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

public chart1 = chartData.widgetChart
public chart2 = chartData.widgetChart2
public chart3 = chartData.widgetChart3

}
