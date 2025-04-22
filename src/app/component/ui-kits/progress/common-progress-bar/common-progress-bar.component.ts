import { Component ,Input } from '@angular/core';
import { progress } from '../../../../shared/data/ui-kits/progress';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-common-progress-bar',
    imports: [CommonModule],
    templateUrl: './common-progress-bar.component.html',
    styleUrls: ['./common-progress-bar.component.scss']
})
export class CommonProgressBarComponent {

  @Input() data: progress[];

}
