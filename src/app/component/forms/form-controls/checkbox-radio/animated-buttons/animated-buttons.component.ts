import { Component } from '@angular/core';
import { soicaMidia, paymentData } from '../../../../../shared/data/forms/form-controls/checkbox-radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-animated-buttons',
    imports: [CommonModule, FormsModule],
    templateUrl: './animated-buttons.component.html',
    styleUrls: ['./animated-buttons.component.scss']
})
export class AnimatedButtonsComponent {

  public SoicalmidiaData = soicaMidia;
  public payment = paymentData;

}
