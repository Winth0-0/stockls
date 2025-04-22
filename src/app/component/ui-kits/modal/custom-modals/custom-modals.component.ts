import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BalanceModalComponent } from './balance-modal/balance-modal.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { ResultModalComponent } from './result-modal/result-modal.component';

@Component({
    selector: 'app-custom-modals',
    imports: [CommonModule, BalanceModalComponent, ProfileModalComponent, ResultModalComponent],
    templateUrl: './custom-modals.component.html',
    styleUrls: ['./custom-modals.component.scss']
})
export class CustomModalsComponent {

}
