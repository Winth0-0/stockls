import { Component } from '@angular/core';
import { outlinecustomData } from '../../../../shared/data/buttons/button-group';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-outline-custom-button-group',
    imports: [CommonModule],
    templateUrl: './outline-custom-button-group.component.html',
    styleUrls: ['./outline-custom-button-group.component.scss']
})
export class OutlineCustomButtonGroupComponent {

  public CustomOutlineData = outlinecustomData;


}
