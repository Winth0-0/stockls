import { Component } from '@angular/core';
import { FontStyle } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-font-style',
    imports: [CommonModule],
    templateUrl: './font-style.component.html',
    styleUrls: ['./font-style.component.scss']
})
export class FontStyleComponent {

  public FontstyleData = FontStyle;


}
