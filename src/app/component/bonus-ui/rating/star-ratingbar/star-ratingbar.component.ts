import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
    selector: 'app-star-ratingbar',
    imports: [CommonModule, BarRatingModule],
    templateUrl: './star-ratingbar.component.html',
    styleUrls: ['./star-ratingbar.component.scss']
})
export class StarRatingbarComponent {

 public cssRate = 1;

}
