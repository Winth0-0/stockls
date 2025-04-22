import { Component } from '@angular/core';
import { inlineStyle } from '../../../../../shared/data/forms/form-controls/mega-options';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-inline-style',
    imports: [CommonModule],
    templateUrl: './inline-style.component.html',
    styleUrls: ['./inline-style.component.scss']
})
export class InlineStyleComponent {

  public inlineData = inlineStyle;

}
