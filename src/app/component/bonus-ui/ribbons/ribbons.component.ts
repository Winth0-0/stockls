import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VariationsLeftRibbonsComponent } from './variations-left-ribbons/variations-left-ribbons.component';
import { VariationsRightRibbonsComponent } from './variations-right-ribbons/variations-right-ribbons.component';

@Component({
    selector: 'app-ribbons',
    imports: [CommonModule, VariationsLeftRibbonsComponent, VariationsRightRibbonsComponent],
    templateUrl: './ribbons.component.html',
    styleUrls: ['./ribbons.component.scss']
})
export class RibbonsComponent {

}
