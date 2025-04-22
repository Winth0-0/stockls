import { Component } from '@angular/core';
import { CryptoAnnotations } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-crypto-annotations',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './crypto-annotations.component.html',
    styleUrls: ['./crypto-annotations.component.scss']
})
export class CryptoAnnotationsComponent {

  public CryptoannotationsChart = CryptoAnnotations;

}
