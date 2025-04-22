import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodComponent } from './cod/cod.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { EmiComponent } from './emi/emi.component';
import { NetBankingComponent } from './net-banking/net-banking.component';

@Component({
    selector: 'app-payment-detalis',
    imports: [CommonModule, CodComponent, CreditCardComponent, DebitCardComponent, EmiComponent, NetBankingComponent],
    templateUrl: './payment-detalis.component.html',
    styleUrls: ['./payment-detalis.component.scss']
})
export class PaymentDetalisComponent {

}
