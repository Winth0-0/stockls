import { Component } from '@angular/core';
import { RightRibbons } from '../../../../shared/data/bonus-ui/ribbons';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-variations-right-ribbons',
    imports: [CommonModule],
    templateUrl: './variations-right-ribbons.component.html',
    styleUrls: ['./variations-right-ribbons.component.scss']
})
export class VariationsRightRibbonsComponent {

  public rightRibbonsData = RightRibbons;

}
