import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BordersWithIconsComponent } from './borders-with-icons/borders-with-icons.component';
import { CustomSwitchComponent } from './custom-switch/custom-switch.component';
import { DisabledOutlineSwitchComponent } from './disabled-outline-switch/disabled-outline-switch.component';
import { IconsSwitchComponent } from './icons-switch/icons-switch.component';
import { SwitchSizingComponent } from './switch-sizing/switch-sizing.component';
import { UncheckedSwitchComponent } from './unchecked-switch/unchecked-switch.component';
import { VariationSwitchesComponent } from './variation-switches/variation-switches.component';
import { SwihchWithIocnsComponent } from './swihch-with-iocns/swihch-with-iocns.component';

@Component({
    selector: 'app-switch',
    imports: [CommonModule, BordersWithIconsComponent, CustomSwitchComponent, DisabledOutlineSwitchComponent,
        IconsSwitchComponent, SwitchSizingComponent, UncheckedSwitchComponent, VariationSwitchesComponent, SwihchWithIocnsComponent],
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

}
