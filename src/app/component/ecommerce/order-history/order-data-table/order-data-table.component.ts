import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderdataTableDirective, SortEvent } from '../../../../shared/directives/orderdata.directive';
import { ORDERS } from '../../../../shared/data/ecommerce/orderhistory';
import { orderHistory } from '../../../../shared/data/ecommerce/orderhistory';
import { OrderService } from '../../../../shared/services/ecommerce/order.service';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-order-data-table',
    imports: [CommonModule, NgbModule, OrderdataTableDirective, FeathericonComponent, FormsModule, RouterModule],
    providers: [OrderService, DecimalPipe],
    templateUrl: './order-data-table.component.html',
    styleUrls: ['./order-data-table.component.scss']
})
export class OrderDataTableComponent {

  public products$: Observable<ORDERS[]>;
  public total$: Observable<number>;
  public  Data!:ORDERS[];
  public orderHistoryData = orderHistory;

  @ViewChildren(OrderdataTableDirective) headers!: QueryList<OrderdataTableDirective>;

  constructor(public service: OrderService) {
    this.products$ = service.support$;
    this.total$ = service.total$;
  }
 
  ngOnInit() {
    this.products$.subscribe((res) => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortableOrder !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
