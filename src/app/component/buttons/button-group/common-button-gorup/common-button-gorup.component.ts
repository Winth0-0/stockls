import { Component } from '@angular/core';
import { CommonButtonGroup } from '../../../../shared/data/buttons/button-group';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-button-gorup',
    imports: [CommonModule],
    templateUrl: './common-button-gorup.component.html',
    styleUrls: ['./common-button-gorup.component.scss']
})
export class CommonButtonGorupComponent {

  public commonData = CommonButtonGroup;

}
