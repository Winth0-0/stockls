import { Component } from '@angular/core';
import { LatestOrders } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-latest-orders',
    imports: [CommonModule, RouterModule, ClickOutsideDirective],
    templateUrl: './latest-orders.component.html',
    styleUrls: ['./latest-orders.component.scss']
})
export class LatestOrdersComponent {

  public latesOdersData = LatestOrders;
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}
