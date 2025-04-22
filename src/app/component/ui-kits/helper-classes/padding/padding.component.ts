import { Component } from '@angular/core';
import { Padding } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-padding',
    imports: [CommonModule],
    templateUrl: './padding.component.html',
    styleUrls: ['./padding.component.scss']
})
export class PaddingComponent {

  public PaddingData = Padding;

}
