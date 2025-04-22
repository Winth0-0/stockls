import { Component } from '@angular/core';
import { checkBox, themeSales } from '../../../../../shared/data/forms/form-controls/mega-options';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-variation-checkbox',
    imports: [CommonModule, FormsModule],
    templateUrl: './variation-checkbox.component.html',
    styleUrls: ['./variation-checkbox.component.scss']
})
export class VariationCheckboxComponent {

  public checkboxData = checkBox;
  public themeData = themeSales;

}
