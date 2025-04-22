import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-fullscreen-xxl-modal',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './fullscreen-xxl-modal.component.html',
    styleUrls: ['./fullscreen-xxl-modal.component.scss']
})
export class FullscreenXxlModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowXxlModal(FullscreenbelowXxlContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowXxlContent, { size: 'xxl' });
  }

}
