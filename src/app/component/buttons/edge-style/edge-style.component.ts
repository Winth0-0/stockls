import { Component } from '@angular/core';
import { EdgeButtons, styleButton } from '../../../shared/data/buttons/edge-style';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edge-style',
    imports: [CommonModule, NgbModule],
    templateUrl: './edge-style.component.html',
    styleUrls: ['./edge-style.component.scss']
})
export class EdgeStyleComponent {

  public EdgeData = EdgeButtons;
  public StylebuttonData = styleButton;

}
