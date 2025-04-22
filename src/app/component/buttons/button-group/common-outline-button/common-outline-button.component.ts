import { Component } from '@angular/core';
import { CommonOutlineButton } from '../../../../shared/data/buttons/button-group';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-outline-button',
    imports: [CommonModule],
    templateUrl: './common-outline-button.component.html',
    styleUrls: ['./common-outline-button.component.scss']
})
export class CommonOutlineButtonComponent {

  public commonData = CommonOutlineButton;

}
