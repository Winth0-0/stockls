import { Component, Input } from '@angular/core';
import { button } from '../../../../shared/data/ui-kits/tag-pills';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-common-bedge-pills',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './common-bedge-pills.component.html',
    styleUrls: ['./common-bedge-pills.component.scss']
})
export class CommonBedgePillsComponent {

  @Input() data: button[];


}
