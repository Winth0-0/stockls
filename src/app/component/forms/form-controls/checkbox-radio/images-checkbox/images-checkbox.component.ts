import { Component } from '@angular/core';
import { imageChekbox } from '../../../../../shared/data/forms/form-controls/checkbox-radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-images-checkbox',
    imports: [CommonModule, FormsModule],
    templateUrl: './images-checkbox.component.html',
    styleUrls: ['./images-checkbox.component.scss']
})
export class ImagesCheckboxComponent {

  public imgcheckboxData = imageChekbox;

}
