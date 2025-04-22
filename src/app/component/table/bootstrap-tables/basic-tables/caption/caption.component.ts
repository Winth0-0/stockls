import { Component } from '@angular/core';
import { caption } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-caption',
    imports: [CommonModule],
    templateUrl: './caption.component.html',
    styleUrls: ['./caption.component.scss']
})
export class CaptionComponent {

  public captionData = caption;

}
