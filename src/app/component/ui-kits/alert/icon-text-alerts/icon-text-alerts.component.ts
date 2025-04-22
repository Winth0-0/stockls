import { Component } from '@angular/core';
import * as data from '../../../../shared/data/ui-kits/alert';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-text-alerts',
    imports: [CommonModule],
    templateUrl: './icon-text-alerts.component.html',
    styleUrls: ['./icon-text-alerts.component.scss']
})
export class IconTextAlertsComponent {

  public icontextData = data.IconandTextAlert;

  close(icontextitem: data.Icons) {
    this.icontextData.splice(this.icontextData.indexOf(icontextitem), 1);
  }

}
