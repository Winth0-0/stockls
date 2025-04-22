import { Component } from '@angular/core';
import { uses } from '../../../../shared/data/widgets/chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-uses',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './uses.component.html',
    styleUrls: ['./uses.component.scss']
})
export class UsesComponent {

  public userData = uses;

}
