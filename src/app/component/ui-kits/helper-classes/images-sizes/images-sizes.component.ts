import { Component } from '@angular/core';
import { ImageSize } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-images-sizes',
    imports: [CommonModule],
    templateUrl: './images-sizes.component.html',
    styleUrls: ['./images-sizes.component.scss']
})
export class ImagesSizesComponent {

  public ImagSizeData = ImageSize;

}
