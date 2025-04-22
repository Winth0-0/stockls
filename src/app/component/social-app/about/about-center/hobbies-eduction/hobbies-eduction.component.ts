import { Component, Input } from '@angular/core';
import { hobbiesEduction } from '../../../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hobbies-eduction',
    imports: [CommonModule],
    templateUrl: './hobbies-eduction.component.html',
    styleUrls: ['./hobbies-eduction.component.scss']
})
export class HobbiesEductionComponent {

  @Input() data: hobbiesEduction;


}
