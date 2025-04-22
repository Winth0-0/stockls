import { Component } from '@angular/core';
import { FontSize } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-font-sizes',
    imports: [CommonModule],
    templateUrl: './font-sizes.component.html',
    styleUrls: ['./font-sizes.component.scss']
})
export class FontSizesComponent {

  public fonstSizeData = FontSize;

}
