import { Component } from '@angular/core';
import { radioButton } from '../../../../shared/data/buttons/button-group';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-radio-button-group',
    imports: [CommonModule, FormsModule],
    templateUrl: './radio-button-group.component.html',
    styleUrls: ['./radio-button-group.component.scss']
})
export class RadioButtonGroupComponent {

  public radiobuttonData = radioButton;

}
