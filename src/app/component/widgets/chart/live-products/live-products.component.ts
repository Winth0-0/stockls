import { Component } from '@angular/core';
import { LiveProducts } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-live-products',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './live-products.component.html',
    styleUrls: ['./live-products.component.scss']
})
export class LiveProductsComponent {

  public LiveProductChart = LiveProducts;

}
