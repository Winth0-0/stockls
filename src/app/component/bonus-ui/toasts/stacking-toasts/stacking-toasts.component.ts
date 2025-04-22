import { Component } from '@angular/core';
import { StackingToasts } from '../../../../shared/data/bonus-ui/toasts';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-stacking-toasts',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './stacking-toasts.component.html',
    styleUrls: ['./stacking-toasts.component.scss']
})
export class StackingToastsComponent {

  public stackingData = StackingToasts;

  close(value: number) {
    const items = this.stackingData.filter(v => v.id == value)
    items[0].data = false;
  }

}
