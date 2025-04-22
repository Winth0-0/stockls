import { Component } from '@angular/core';
import { Multiplebars } from '../../../../shared/data/ui-kits/progress';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-multiple-bars',
    imports: [CommonModule],
    templateUrl: './multiple-bars.component.html',
    styleUrls: ['./multiple-bars.component.scss']
})
export class MultipleBarsComponent {

  public mutiPalbarData = Multiplebars;

}
