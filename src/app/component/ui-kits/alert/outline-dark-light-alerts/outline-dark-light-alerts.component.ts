import { Component } from '@angular/core';
import * as data from '../../../../shared/data/ui-kits/alert';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-outline-dark-light-alerts',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './outline-dark-light-alerts.component.html',
    styleUrls: ['./outline-dark-light-alerts.component.scss']
})
export class OutlineDarkLightAlertsComponent {

  public outlinealertData = data.OutlineDarkAlert;

  close(outlineitem: data.Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }


}
