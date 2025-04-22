import { Component } from '@angular/core';
import { VerticalStylel } from '../../../../../shared/data/forms/form-controls/mega-options';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-vertical-style',
    imports: [CommonModule, FormsModule],
    templateUrl: './vertical-style.component.html',
    styleUrls: ['./vertical-style.component.scss']
})
export class VerticalStyleComponent {

  public verticalstyleData = VerticalStylel;


}
