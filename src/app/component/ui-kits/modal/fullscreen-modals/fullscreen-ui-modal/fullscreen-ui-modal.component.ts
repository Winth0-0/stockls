import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';
import { ModalData } from '../../../../../shared/data/ui-kits/modal';

@Component({
    selector: 'app-fullscreen-ui-modal',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './fullscreen-ui-modal.component.html',
    styleUrls: ['./fullscreen-ui-modal.component.scss']
})
export class FullscreenUiModalComponent {

  public FullscreenData = ModalData;
  constructor(private modalService: NgbModal) { }

  FullscreenbelowModal(FullscreenbelowContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowContent, { fullscreen: true });
  }

}
