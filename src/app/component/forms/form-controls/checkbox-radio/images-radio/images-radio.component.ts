import { Component } from '@angular/core';
import { imageRadio } from '../../../../../shared/data/forms/form-controls/checkbox-radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-images-radio',
    imports: [CommonModule, FormsModule],
    templateUrl: './images-radio.component.html',
    styleUrls: ['./images-radio.component.scss']
})
export class ImagesRadioComponent {

  public imgradioData = imageRadio;

}
