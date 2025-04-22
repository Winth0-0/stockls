import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';
import { CommonBackgroundColorsComponent } from './common-background-colors/common-background-colors.component';

@Component({
    selector: 'app-background-colors',
    imports: [CommonModule, CommonBackgroundColorsComponent],
    templateUrl: './background-colors.component.html',
    styleUrls: ['./background-colors.component.scss']
})
export class BackgroundColorsComponent {

  public DarkBackgrounData = borderData.DarkBackground;
  public LightBackgroundsData = borderData.Lightbackgrounds;
  public ExtendedBackgroundData = borderData.ExtendedBackground;

}
