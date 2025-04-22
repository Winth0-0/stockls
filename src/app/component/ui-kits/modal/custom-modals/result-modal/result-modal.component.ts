import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-result-modal',
    imports: [CommonModule, RouterModule],
    templateUrl: './result-modal.component.html',
    styleUrls: ['./result-modal.component.scss']
})
export class ResultModalComponent {

  constructor(private modalService: NgbModal) { }

  ResultModal(resultcontant: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(resultcontant, { centered: true });
  }

}
