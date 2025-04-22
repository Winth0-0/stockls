import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-dismissing-light-alert',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './dismissing-light-alert.component.html',
    styleUrls: ['./dismissing-light-alert.component.scss']
})
export class DismissingLightAlertComponent {

  public alerts2: boolean = true;

  close2() {
    this.alerts2 = false;
  }

}
