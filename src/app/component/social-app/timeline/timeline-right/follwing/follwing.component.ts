import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-follwing',
    imports: [CommonModule, NgbModule],
    templateUrl: './follwing.component.html',
    styleUrls: ['./follwing.component.scss']
})
export class FollwingComponent {

  public followingData = data.Following;

}
