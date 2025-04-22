import { Component } from '@angular/core';
import { FlatButtons, StyleButton } from '../../../shared/data/buttons/flat-buttons';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-flat-style',
    imports: [CommonModule, NgbModule],
    templateUrl: './flat-style.component.html',
    styleUrls: ['./flat-style.component.scss']
})
export class FlatStyleComponent {

  public FlatButtonsData = FlatButtons;
  public StylebuttonData = StyleButton;

}
