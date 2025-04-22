import { Component } from '@angular/core';
import { TextColors } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-text-colors',
    imports: [CommonModule],
    templateUrl: './text-colors.component.html',
    styleUrls: ['./text-colors.component.scss']
})
export class TextColorsComponent {

  public TextColorData = TextColors;

}
