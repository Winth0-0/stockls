import { Component } from '@angular/core';
import { CryptocurrencyPrices } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-cryptocurrency-prices',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './cryptocurrency-prices.component.html',
    styleUrls: ['./cryptocurrency-prices.component.scss']
})
export class CryptocurrencyPricesComponent {

  public CryptocurrencyPricesChart = CryptocurrencyPrices;

}
