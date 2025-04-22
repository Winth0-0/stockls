import { Component } from '@angular/core';
import { LeftRibbons } from '../../../../shared/data/bonus-ui/ribbons';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-variations-left-ribbons',
    imports: [CommonModule],
    templateUrl: './variations-left-ribbons.component.html',
    styleUrls: ['./variations-left-ribbons.component.scss']
})
export class VariationsLeftRibbonsComponent {

  public leftRibbonsData = LeftRibbons;

}
