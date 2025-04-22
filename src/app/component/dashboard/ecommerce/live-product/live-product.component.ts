import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LiveProduct } from '../../../../shared/data/dashboard/default/default';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-live-product',
    imports: [CommonModule, RouterModule, ClickOutsideDirective],
    templateUrl: './live-product.component.html',
    styleUrls: ['./live-product.component.scss']
})
export class LiveProductComponent {

  public liveproductData = LiveProduct;
  public openid!: number;

  openMenu(id: number) {
    this.liveproductData.filter((data) => {
      if (data.id == id) {
        data.isActive = !data.isActive
      }
    })
  }

}
