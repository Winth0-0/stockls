import { Component } from '@angular/core';
import { UncheckedSwitch } from '../../../../../shared/data/forms/forms-widgets/switch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-unchecked-switch',
    imports: [CommonModule, FormsModule],
    templateUrl: './unchecked-switch.component.html',
    styleUrls: ['./unchecked-switch.component.scss']
})
export class UncheckedSwitchComponent {

  public unchakedData = UncheckedSwitch;

}
