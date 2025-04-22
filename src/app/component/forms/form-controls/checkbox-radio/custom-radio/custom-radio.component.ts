import { Component } from '@angular/core';
import { BorderedRadio, IconsRadio, FilledRadio } from '../../../../,./../../shared/data/forms/form-controls/checkbox-radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-custom-radio',
    imports: [CommonModule, FormsModule],
    templateUrl: './custom-radio.component.html',
    styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent {
  
  public borderData = BorderedRadio;
  public iconData = IconsRadio;
  public filledData = FilledRadio;

}
