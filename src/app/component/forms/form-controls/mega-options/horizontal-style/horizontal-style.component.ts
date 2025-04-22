import { Component } from '@angular/core';
import { HorizontalStylel } from '../../../../../shared/data/forms/form-controls/mega-options';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-horizontal-style',
    imports: [CommonModule],
    templateUrl: './horizontal-style.component.html',
    styleUrls: ['./horizontal-style.component.scss']
})
export class HorizontalStyleComponent {

  public horizontalStyleData = HorizontalStylel;

}
