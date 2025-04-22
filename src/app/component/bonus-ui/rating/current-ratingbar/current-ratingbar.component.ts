import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faStarHalfAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { BarRatingModule } from "ngx-bar-rating";
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-current-ratingbar',
    imports: [FormsModule, NgbModule, BarRatingModule, FontAwesomeModule],
    templateUrl: './current-ratingbar.component.html',
    styleUrls: ['./current-ratingbar.component.scss']
})
export class CurrentRatingbarComponent {

  public faoRate = 5.6;
  public faoRated = false;

  onFaoRate(e: number) {
    this.faoRated = true;
    this.faoRate = e;
  }
  ctrl = new FormControl<number | null>(null, Validators.required);

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }
  constructor(library: FaIconLibrary) {
    library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle);
  }

}
