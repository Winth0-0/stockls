import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
    selector: 'app-movie-ratingbar',
    imports: [CommonModule, BarRatingModule],
    templateUrl: './movie-ratingbar.component.html',
    styleUrls: ['./movie-ratingbar.component.scss']
})
export class MovieRatingbarComponent {

  public movieRate = 2;

}
