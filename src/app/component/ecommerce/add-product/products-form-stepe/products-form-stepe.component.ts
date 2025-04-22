import { Component, Input } from '@angular/core';
import { staps } from '../../../../shared/data/ecommerce/add-product';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-products-form-stepe',
    imports: [CommonModule],
    templateUrl: './products-form-stepe.component.html',
    styleUrls: ['./products-form-stepe.component.scss']
})
export class ProductsFormStepeComponent {

  @Input() stepsData!: staps [];
  @Input() activeSteps!: number;


}
