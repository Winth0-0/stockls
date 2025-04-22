import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-add-tag',
    imports: [CommonModule],
    templateUrl: './add-tag.component.html',
    styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
