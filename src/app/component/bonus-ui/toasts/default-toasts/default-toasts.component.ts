import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-default-toasts',
    imports: [CommonModule],
    templateUrl: './default-toasts.component.html',
    styleUrls: ['./default-toasts.component.scss']
})
export class DefaultToastsComponent {

  public default: boolean = true;

  close() {
    this.default = false;
  }

}
