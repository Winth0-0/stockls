import { Component } from '@angular/core';
import { Touchspin } from '../../../../../shared/data/forms/forms-widgets/touchspin';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-default-touchspin',
    imports: [CommonModule],
    templateUrl: './default-touchspin.component.html',
    styleUrls: ['./default-touchspin.component.scss']
})
export class DefaultTouchspinComponent {

  public TouchspinData = Touchspin;

  decrement(i: number) {
    if (this.TouchspinData[i].value > 0) {
      this.TouchspinData[i].value -= 1;
    }
  }
  increment(i: number) {
    this.TouchspinData[i].value += 1;
  }

}
