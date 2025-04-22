import { Component } from '@angular/core';
import { VariationRadiopayment, VariationsWebdesign, variationsIcons } from '../../../../../shared/data/forms/form-controls/mega-options';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-variation-radio',
    imports: [CommonModule, FormsModule],
    templateUrl: './variation-radio.component.html',
    styleUrls: ['./variation-radio.component.scss']
})
export class VariationRadioComponent {

  public paymentData = VariationRadiopayment;
  public webdesignData = VariationsWebdesign;
  public iconsData = variationsIcons;

}
