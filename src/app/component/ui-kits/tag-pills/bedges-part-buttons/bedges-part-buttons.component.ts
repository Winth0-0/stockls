import { Component } from '@angular/core';
import { BadgePartButtons } from '../../../../shared/data/ui-kits/tag-pills';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-bedges-part-buttons',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './bedges-part-buttons.component.html',
    styleUrls: ['./bedges-part-buttons.component.scss']
})
export class BedgesPartButtonsComponent {

  public buttonspartData = BadgePartButtons;


}
