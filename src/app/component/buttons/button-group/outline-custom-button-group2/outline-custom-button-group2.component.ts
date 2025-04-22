import { Component } from '@angular/core';
import { outlinecustomData2 } from '../../../../shared/data/buttons/button-group';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-outline-custom-button-group2',
    imports: [CommonModule],
    templateUrl: './outline-custom-button-group2.component.html',
    styleUrls: ['./outline-custom-button-group2.component.scss']
})
export class OutlineCustomButtonGroup2Component {
  
  public CustomOutlineData = outlinecustomData2;


}
