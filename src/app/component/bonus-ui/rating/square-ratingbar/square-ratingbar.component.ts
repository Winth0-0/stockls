import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
    selector: 'app-square-ratingbar',
    imports: [CommonModule, BarRatingModule],
    templateUrl: './square-ratingbar.component.html',
    styleUrls: ['./square-ratingbar.component.scss']
})
export class SquareRatingbarComponent {

 public squareRate = 1;

}
