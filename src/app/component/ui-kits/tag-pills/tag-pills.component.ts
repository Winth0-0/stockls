import { Component } from '@angular/core';
import * as  data from '../../../shared/data/ui-kits/tag-pills';
import { CommonModule } from '@angular/common';
import { CommonBedgePillsComponent } from './common-bedge-pills/common-bedge-pills.component';
import { BedgesPartButtonsComponent } from './bedges-part-buttons/bedges-part-buttons.component';
import { BedgeHeadingsComponent } from './bedge-headings/bedge-headings.component';

@Component({
    selector: 'app-tag-pills',
    imports: [CommonModule, CommonBedgePillsComponent, BedgesPartButtonsComponent, BedgeHeadingsComponent],
    templateUrl: './tag-pills.component.html',
    styleUrls: ['./tag-pills.component.scss']
})
export class TagPillsComponent {

  public BadgesData = data.buttons;
  public PillsData = data.pills;
  public NumberBadgeData = data.NumberBadge;
  public NumberPillsData = data.NumberPillstag;
  public IconBadeData = data.iconbadge;
  public IconpillsData = data.iconpills;

}
