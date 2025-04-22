import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-static-backdrop-modal',
    imports: [CommonModule],
    templateUrl: './static-backdrop-modal.component.html',
    styleUrls: ['./static-backdrop-modal.component.scss']
})
export class StaticBackdropModalComponent {

  constructor(private modalService: NgbModal) { }

  StaticBackdropModal(StaticBackdropContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(StaticBackdropContent, { centered: true });
  }

}
