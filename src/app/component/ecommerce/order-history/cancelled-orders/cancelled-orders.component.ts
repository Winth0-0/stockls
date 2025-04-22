import { Component } from '@angular/core';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CancelledOrders, Order } from '../../../../shared/data/ecommerce/orderhistory';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-cancelled-orders',
    imports: [CommonModule, FeathericonComponent, NgbModule],
    templateUrl: './cancelled-orders.component.html',
    styleUrls: ['./cancelled-orders.component.scss']
})
export class CancelledOrdersComponent {

  public cancelled = CancelledOrders;
  public rateing = 5;

  constructor(public config: NgbRatingConfig) {
    config.max = 5; config.readonly = true;
  }

  close(item: Order) {
    this.cancelled.splice(this.cancelled.indexOf(item), 1);
  }


}
