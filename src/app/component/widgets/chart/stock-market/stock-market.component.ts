import { Component } from '@angular/core';
import { StockMarket } from '../../../../shared/data/widgets/chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-stock-market',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './stock-market.component.html',
    styleUrls: ['./stock-market.component.scss']
})
export class StockMarketComponent {

  public stockMarkeData = StockMarket;

}
