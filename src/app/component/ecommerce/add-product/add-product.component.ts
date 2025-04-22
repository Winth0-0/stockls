import { Component } from '@angular/core';
import { AddProduct } from '../../../shared/data/ecommerce/add-product';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsGalleryComponent } from './products-gallery/products-gallery.component';

import { SellingPriceComponent } from './selling-price/selling-price.component';
import { AdvanceComponent } from './advance/advance.component';
import { ProductsFormStepeComponent } from './products-form-stepe/products-form-stepe.component';
import { AddProductsDetailsComponent } from './add-products-details/add-products-details.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';


@Component({
    selector: 'app-add-product',
    imports: [CommonModule, NgbModule, ProductsGalleryComponent, SellingPriceComponent, AdvanceComponent, ProductsFormStepeComponent,
        AddProductsDetailsComponent, ProductsCategoriesComponent],
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  public stepsData = AddProduct;
  public activeSteps!: number;

  ngOnInit() {
    const data = AddProduct.filter((data) => {
      return data.stepNumber === 1;
    });

    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }

}
