import { Component , Input} from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-border-style',
    imports: [CommonModule],
    templateUrl: './common-border-style.component.html',
    styleUrls: ['./common-border-style.component.scss']
})
export class CommonBorderStyleComponent {

  @Input() data: titleData[];

}
