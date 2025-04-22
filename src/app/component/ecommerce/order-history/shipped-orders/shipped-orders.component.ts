import { Component } from '@angular/core';
import { ShippedOrders, Order} from '../../../../shared/data/ecommerce/orderhistory';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-shipped-orders',
    imports: [CommonModule, FeathericonComponent, NgbModule],
    templateUrl: './shipped-orders.component.html',
    styleUrls: ['./shipped-orders.component.scss']
})
export class ShippedOrdersComponent {

  public shippedData = ShippedOrders;
  public rateing = 5;

  constructor(public config: NgbRatingConfig) {
    config.max = 5; config.readonly = true;
  }

  close(item: Order) {
    this.shippedData.splice(this.shippedData.indexOf(item), 1);
  }

}
