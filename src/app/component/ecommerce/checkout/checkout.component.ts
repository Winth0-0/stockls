import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ProductTotalComponent } from './product-total/product-total.component';

@Component({
    selector: 'app-checkout',
    imports: [CommonModule, BillingDetailsComponent, ProductTotalComponent],
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

}
