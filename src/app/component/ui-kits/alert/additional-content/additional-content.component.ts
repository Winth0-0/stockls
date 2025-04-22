import { Component } from '@angular/core';
import { AdditionalContent } from '../../../../shared/data/ui-kits/alert';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-additional-content',
    imports: [CommonModule],
    templateUrl: './additional-content.component.html',
    styleUrls: ['./additional-content.component.scss']
})
export class AdditionalContentComponent {

  public additionalData = AdditionalContent;

}
