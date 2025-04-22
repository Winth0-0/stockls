import { Component } from '@angular/core';
import { outlinedtouchspin } from '../../../../../shared/data/forms/forms-widgets/touchspin';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-outlined-touchspin',
    imports: [CommonModule],
    templateUrl: './outlined-touchspin.component.html',
    styleUrls: ['./outlined-touchspin.component.scss']
})
export class OutlinedTouchspinComponent {

  public OutlinedData = outlinedtouchspin;

  decrement(i: number) {
    if (this.OutlinedData[i].value > 0) {
      this.OutlinedData[i].value -= 1;
    }
  }
  increment(i: number) {
    this.OutlinedData[i].value += 1;
  }

}
