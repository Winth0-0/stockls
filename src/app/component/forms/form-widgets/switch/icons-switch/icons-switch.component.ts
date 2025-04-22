import { Component } from '@angular/core';
import { IconSwitch } from '../../../../../shared/data/forms/forms-widgets/switch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-icons-switch',
    imports: [CommonModule, FormsModule],
    templateUrl: './icons-switch.component.html',
    styleUrls: ['./icons-switch.component.scss']
})
export class IconsSwitchComponent {

  public iconsData = IconSwitch;

}
