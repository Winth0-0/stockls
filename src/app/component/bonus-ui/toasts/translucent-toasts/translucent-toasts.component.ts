import { Component } from '@angular/core';
import { TranslucentToasts } from '../../../../shared/data/bonus-ui/toasts';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-translucent-toasts',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './translucent-toasts.component.html',
    styleUrls: ['./translucent-toasts.component.scss']
})
export class TranslucentToastsComponent {

  public TranslucentToastsData = TranslucentToasts;

  close(value: number) {
    const items = this.TranslucentToastsData.filter(v => v.id == value)
    items[0].data = false;
  }

}
