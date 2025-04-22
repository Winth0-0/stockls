import { Component } from '@angular/core';
import { iconsiwtchSizing } from '../../../../../shared/data/forms/forms-widgets/switch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-swihch-with-iocns',
    imports: [CommonModule, FormsModule],
    templateUrl: './swihch-with-iocns.component.html',
    styleUrls: ['./swihch-with-iocns.component.scss']
})
export class SwihchWithIocnsComponent {

  public iconsizeingData = iconsiwtchSizing;

}
