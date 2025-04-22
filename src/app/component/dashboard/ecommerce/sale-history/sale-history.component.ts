import { Component } from '@angular/core';
import { saleHistory } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sale-history',
    imports: [CommonModule, RouterModule],
    templateUrl: './sale-history.component.html',
    styleUrls: ['./sale-history.component.scss']
})
export class SaleHistoryComponent {

  public saleHistoryData = saleHistory

}
