import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';
import { CommonBorderStyleComponent } from './common-border-style/common-border-style.component';

@Component({
    selector: 'app-styles-borders',
    imports: [CommonModule, CommonBorderStyleComponent],
    templateUrl: './styles-borders.component.html',
    styleUrls: ['./styles-borders.component.scss']
})
export class StylesBordersComponent {

  public customborder = borderData.Customborder;
  public borderColor = borderData.colorBorders;
  public borderWiths = borderData.borderWith;
  public textColors = borderData.TextColor;

}
