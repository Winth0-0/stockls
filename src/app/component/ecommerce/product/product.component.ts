import { Component } from '@angular/core';
import { ProductBoxFilterService } from '../../../shared/services/ecommerce/product-box-filter.service';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-product',
    imports: [CommonModule, FilterComponent, ProductBoxComponent, FeathericonComponent],
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  public listView: boolean = false;
  public openSidebar: boolean = false;
  public OpenFilter: boolean = false;

  constructor(private ProductBoxFilterService: ProductBoxFilterService) { }

  gridOpens() {
    this.listView = false
    this.ProductBoxFilterService.gridOpen()
  }
  listOpens() {
    this.listView = true
    this.ProductBoxFilterService.listOpen()
  }
  grid2s() {
    this.listView = false
    this.ProductBoxFilterService.grid2()

  }
  grid3s() {
    this.listView = false
    this.ProductBoxFilterService.grid3()
  }
  grid6s() {
    this.listView = false
    this.ProductBoxFilterService.grid6()
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar
  }
  
  openFilter() {
    this.openSidebar = !this.openSidebar
  }

  clickOutside():void { 
    this.openSidebar = false;
  }
}
