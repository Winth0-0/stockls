import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-fullscreen-xl-modal',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './fullscreen-xl-modal.component.html',
    styleUrls: ['./fullscreen-xl-modal.component.scss']
})
export class FullscreenXlModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowXlModal(FullscreenbelowXlContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowXlContent, { size: 'xl' });
  }

}
