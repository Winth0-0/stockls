import { Component } from '@angular/core';
import { margin } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-margin',
    imports: [CommonModule],
    templateUrl: './margin.component.html',
    styleUrls: ['./margin.component.scss']
})
export class MarginComponent {

  public marginData = margin;

}
