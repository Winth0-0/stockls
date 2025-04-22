import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-tooltip-validation',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './tooltip-validation.component.html',
    styleUrls: ['./tooltip-validation.component.scss']
})
export class TooltipValidationComponent {

  public validate = false;
  public tooltipValidation = false;

  public submit() {
    this.validate = !this.validate;
  }
  
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }


}
