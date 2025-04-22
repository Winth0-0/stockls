import { Component } from '@angular/core';
import { checkboxData } from '../../../../shared/data/buttons/button-group';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-checkbox-button-group',
    imports: [CommonModule],
    templateUrl: './checkbox-button-group.component.html',
    styleUrls: ['./checkbox-button-group.component.scss']
})
export class CheckboxButtonGroupComponent {

  public checkBox = checkboxData;

}
