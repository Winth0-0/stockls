import { Component } from '@angular/core';
import { Productcosting } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-product-costing',
    imports: [CommonModule],
    templateUrl: './common-product-costing.component.html',
    styleUrls: ['./common-product-costing.component.scss']
})
export class CommonProductCostingComponent {

  public productCostingData = Productcosting

}
