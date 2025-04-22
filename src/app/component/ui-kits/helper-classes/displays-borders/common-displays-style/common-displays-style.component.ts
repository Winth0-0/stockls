import { Component ,Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-displays-style',
    imports: [CommonModule],
    templateUrl: './common-displays-style.component.html',
    styleUrls: ['./common-displays-style.component.scss']
})
export class CommonDisplaysStyleComponent {

  @Input() data: titleData[];

}
