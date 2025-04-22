import { Component } from '@angular/core';
import { switchSizeing } from '../../../../../shared/data/forms/forms-widgets/switch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-switch-sizing',
    imports: [CommonModule, FormsModule],
    templateUrl: './switch-sizing.component.html',
    styleUrls: ['./switch-sizing.component.scss']
})
export class SwitchSizingComponent {

  public sizeingData = switchSizeing;

}
