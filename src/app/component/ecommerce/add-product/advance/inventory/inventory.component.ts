import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-inventory',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 6;
  
  myForm = new FormGroup({
    title: new FormControl(),
  });


}
