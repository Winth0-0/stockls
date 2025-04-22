import { Component } from '@angular/core';
import { BorderCheckbox, IconsCheckbox, FilledCheckbox } from '../../../../../shared/data/forms/form-controls/checkbox-radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-custom-checkbox',
    imports: [CommonModule, FormsModule],
    templateUrl: './custom-checkbox.component.html',
    styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {

  public borders = BorderCheckbox;
  public icons = IconsCheckbox;
  public filled = FilledCheckbox;

}
