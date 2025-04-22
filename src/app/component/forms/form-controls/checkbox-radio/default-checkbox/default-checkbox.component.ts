import { Component } from '@angular/core';
import { checkbox } from '../../../../../shared/data/forms/form-controls/checkbox-radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-default-checkbox',
    imports: [CommonModule, FormsModule],
    templateUrl: './default-checkbox.component.html',
    styleUrls: ['./default-checkbox.component.scss']
})
export class DefaultCheckboxComponent {

  public checkboxData = checkbox;

}
