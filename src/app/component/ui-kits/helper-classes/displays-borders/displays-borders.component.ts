import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';
import { CommonDisplaysStyleComponent } from './common-displays-style/common-displays-style.component';

@Component({
    selector: 'app-displays-borders',
    imports: [CommonModule, CommonDisplaysStyleComponent],
    templateUrl: './displays-borders.component.html',
    styleUrls: ['./displays-borders.component.scss']
})
export class DisplaysBordersComponent {

  public Additiveborder = borderData.AdditiveBorderData;
  public SubtractiveborderData = borderData.Subtractiveborder;
  public AdditiveRadiusData = borderData.AdditiveRadius;

}
