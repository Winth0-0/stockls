import { Component } from '@angular/core';
import { avatarSize } from '../../../../shared/data/ui-kits/avavtar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sizes',
    imports: [CommonModule],
    templateUrl: './sizes.component.html',
    styleUrls: ['./sizes.component.scss']
})
export class SizesComponent {

  public SizeData = avatarSize;


}
