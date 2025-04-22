import { Component } from '@angular/core';
import { Bordercolors } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-border-color',
    imports: [CommonModule],
    templateUrl: './border-color.component.html',
    styleUrls: ['./border-color.component.scss']
})
export class BorderColorComponent {

  public borderColorData = Bordercolors;

}
