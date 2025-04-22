import { Component } from '@angular/core';
import { customSwitch } from '../../../../../shared/data/forms/forms-widgets/switch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-custom-switch',
    imports: [CommonModule, FormsModule],
    templateUrl: './custom-switch.component.html',
    styleUrls: ['./custom-switch.component.scss']
})
export class CustomSwitchComponent {

  public customData = customSwitch;

}
