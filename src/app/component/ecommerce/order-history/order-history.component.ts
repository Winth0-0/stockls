import { Component } from '@angular/core';
import { CancelledOrdersComponent } from './cancelled-orders/cancelled-orders.component';
import { NewOrdersComponent } from './new-orders/new-orders.component';
import { OrderDataTableComponent } from './order-data-table/order-data-table.component';
import { ShippedOrdersComponent } from './shipped-orders/shipped-orders.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-history',
    imports: [CommonModule, CancelledOrdersComponent, NewOrdersComponent, OrderDataTableComponent, ShippedOrdersComponent],
    templateUrl: './order-history.component.html',
    styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {

}
