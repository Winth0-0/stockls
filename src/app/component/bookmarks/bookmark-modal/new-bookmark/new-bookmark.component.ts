import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-new-bookmark',
    imports: [CommonModule],
    templateUrl: './new-bookmark.component.html',
    styleUrls: ['./new-bookmark.component.scss']
})
export class NewBookmarkComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
