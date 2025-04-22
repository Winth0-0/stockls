import { Component } from '@angular/core';
import { Disabledoutlineswitch } from '../../../../../shared/data/forms/forms-widgets/switch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-disabled-outline-switch',
    imports: [CommonModule, FormsModule],
    templateUrl: './disabled-outline-switch.component.html',
    styleUrls: ['./disabled-outline-switch.component.scss']
})
export class DisabledOutlineSwitchComponent {

  public disableoutline = Disabledoutlineswitch;

}
