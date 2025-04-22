import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/default/default-chart';
import { CommonModule } from '@angular/common';
import { TopProjectCardComponent } from '../../dashboard/project-dashboard/top-project-card/top-project-card.component';
import { CommonProductCostingComponent } from '../../dashboard/ecommerce/common-product-costing/common-product-costing.component';
import { UserVisitsDayComponent } from '../../dashboard/default/user-visits-day/user-visits-day.component';
import { BoostSaleCardComponent } from './boost-sale-card/boost-sale-card.component';
import { DeliveriesComponent } from '../../dashboard/default/deliveries/deliveries.component';
import { CalendarComponent } from '../../dashboard/project-dashboard/calendar/calendar.component';
import { SalesGeneralChartComponent } from './sales-general-chart/sales-general-chart.component';
import { SpecialOfferComponent } from '../../dashboard/ecommerce/special-offer/special-offer.component';
import { EcommerceDetailsComponent } from '../../dashboard/ecommerce/ecommerce-details/ecommerce-details.component';
import { CommonEcommerceChartComponent } from '../../dashboard/ecommerce/common-ecommerce-chart/common-ecommerce-chart.component';


@Component({
    selector: 'app-general',
    imports: [CommonModule, TopProjectCardComponent, CommonProductCostingComponent, UserVisitsDayComponent, BoostSaleCardComponent,
        DeliveriesComponent, CalendarComponent, SalesGeneralChartComponent, SpecialOfferComponent, EcommerceDetailsComponent, CommonEcommerceChartComponent],
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss']
})
export class GeneralComponent {

  public totalrevenuchart = chartData.revenueChart
  public totalorderchart = chartData.TotalOrderChart

}
