import { Component } from '@angular/core';
import { Finance } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-finance',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './finance.component.html',
    styleUrls: ['./finance.component.scss']
})
export class FinanceComponent {

  public financesData = Finance;

}
