import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-left-border-alert',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './left-border-alert.component.html',
    styleUrls: ['./left-border-alert.component.scss']
})
export class LeftBorderAlertComponent {

  public alerts3: boolean = true;

  close3() {
    this.alerts3 = false;
  }

}
