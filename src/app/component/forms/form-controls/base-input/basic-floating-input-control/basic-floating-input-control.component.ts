import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormDetailsComponent } from './form-details/form-details.component';

@Component({
    selector: 'app-basic-floating-input-control',
    imports: [CommonModule, FormDetailsComponent],
    templateUrl: './basic-floating-input-control.component.html',
    styleUrls: ['./basic-floating-input-control.component.scss']
})
export class BasicFloatingInputControlComponent {

  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }

}
