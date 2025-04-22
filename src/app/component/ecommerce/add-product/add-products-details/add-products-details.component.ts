import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
    selector: 'app-add-products-details',
    imports: [CommonModule, AngularEditorModule, ReactiveFormsModule, FormsModule],
    templateUrl: './add-products-details.component.html',
    styleUrls: ['./add-products-details.component.scss']
})

export class AddProductsDetailsComponent {

  public validate: boolean = false;
  public activeStep: number = 1;

  @Output() activeSteps = new EventEmitter<number>();

  myForm = new FormGroup({
    productTitle: new FormControl('',Validators.required),
  });

  public htmlContent = '';

  next(myForm:FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get productTitle() { 
    return this.myForm.get('productTitle'); 
  }

 
}
