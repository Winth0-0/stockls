import { Component } from '@angular/core';
import { defaultRedio } from '../../../../../shared/data/forms/form-controls/checkbox-radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-default-radio',
    imports: [CommonModule, FormsModule],
    templateUrl: './default-radio.component.html',
    styleUrls: ['./default-radio.component.scss']
})
export class DefaultRadioComponent {

  public redio = defaultRedio;

}
