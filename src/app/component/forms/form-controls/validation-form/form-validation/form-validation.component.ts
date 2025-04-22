import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-form-validation',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent {

  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }

}
