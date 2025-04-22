import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InventoryComponent } from './inventory/inventory.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AdditionalOptionsComponent } from './additional-options/additional-options.component';

@Component({
    selector: 'app-advance',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InventoryComponent, ShippingComponent, AdditionalOptionsComponent],
    templateUrl: './advance.component.html',
    styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent {

  @Output() activeSteps = new EventEmitter<number>();
  
  public activeStep: number = 5;
  public validate!: boolean;
 
  public openTab: string = "Inventory";

  public tabbed(val: string) {
    this.openTab = val
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

}
