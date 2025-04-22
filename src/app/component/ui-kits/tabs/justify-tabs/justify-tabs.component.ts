import { Component } from '@angular/core';
import { webDesigner, UxDesigner, IOTdeveloper } from '../../../../shared/data/ui-kits/tab';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-justify-tabs',
    imports: [CommonModule, NgbModule, FormsModule],
    templateUrl: './justify-tabs.component.html',
    styleUrls: ['./justify-tabs.component.scss']
})
export class JustifyTabsComponent {

  public active = 2;
  public webdesignerData = webDesigner;
  public UXdesignerData = UxDesigner;
  public iotDeveloperData = IOTdeveloper;

}
