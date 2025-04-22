import { Component } from '@angular/core';
import { defaultswitch } from '../../../../../shared/data/forms/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-default-switches',
    imports: [CommonModule, FormsModule],
    templateUrl: './default-switches.component.html',
    styleUrls: ['./default-switches.component.scss']
})
export class DefaultSwitchesComponent {

  public switches = defaultswitch;

}
