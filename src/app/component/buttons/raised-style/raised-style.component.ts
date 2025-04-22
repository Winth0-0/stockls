import { Component } from '@angular/core';
import { raisedButtons, styleButton } from '../../../shared/data/buttons/raised-style';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-raised-style',
    imports: [CommonModule, NgbModule],
    templateUrl: './raised-style.component.html',
    styleUrls: ['./raised-style.component.scss']
})
export class RaisedStyleComponent {

  public RaisedData = raisedButtons;
  public StylebuttonData = styleButton;

}
