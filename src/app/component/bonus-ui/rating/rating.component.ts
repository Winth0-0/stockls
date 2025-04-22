import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrentRatingbarComponent } from './current-ratingbar/current-ratingbar.component';
import { HorizontalRatingbarComponent } from './horizontal-ratingbar/horizontal-ratingbar.component';
import { MovieRatingbarComponent } from './movie-ratingbar/movie-ratingbar.component';
import { OneToTenRatingbarComponent } from './one-to-ten-ratingbar/one-to-ten-ratingbar.component';
import { SquareRatingbarComponent } from './square-ratingbar/square-ratingbar.component';
import { StarRatingbarComponent } from './star-ratingbar/star-ratingbar.component';

@Component({
    selector: 'app-rating',
    imports: [CommonModule, CurrentRatingbarComponent, HorizontalRatingbarComponent, MovieRatingbarComponent, OneToTenRatingbarComponent,
        SquareRatingbarComponent, StarRatingbarComponent],
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

}
