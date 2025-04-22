import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
    selector: 'app-one-to-ten-ratingbar',
    imports: [CommonModule, BarRatingModule],
    templateUrl: './one-to-ten-ratingbar.component.html',
    styleUrls: ['./one-to-ten-ratingbar.component.scss']
})
export class OneToTenRatingbarComponent {

  public faRate = 7;

}
