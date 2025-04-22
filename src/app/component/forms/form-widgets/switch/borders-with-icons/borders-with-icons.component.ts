import { Component } from '@angular/core';
import { bordericons } from '../../../../../shared/data/forms/forms-widgets/switch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-borders-with-icons',
    imports: [CommonModule, FormsModule],
    templateUrl: './borders-with-icons.component.html',
    styleUrls: ['./borders-with-icons.component.scss']
})
export class BordersWithIconsComponent {

  public borderData = bordericons;

}
