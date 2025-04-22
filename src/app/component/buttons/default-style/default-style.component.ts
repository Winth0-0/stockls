import { Component } from '@angular/core';
import { DefaultButtons, styleButton } from '../../../shared/data/buttons/default-style';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-default-style',
    imports: [CommonModule, NgbModule],
    templateUrl: './default-style.component.html',
    styleUrls: ['./default-style.component.scss']
})
export class DefaultStyleComponent {

  public defaultstyleData = DefaultButtons;
  public StylebuttonData = styleButton;

}
