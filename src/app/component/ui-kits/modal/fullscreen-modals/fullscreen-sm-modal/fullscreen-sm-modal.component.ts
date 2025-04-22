import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-fullscreen-sm-modal',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './fullscreen-sm-modal.component.html',
    styleUrls: ['./fullscreen-sm-modal.component.scss']
})
export class FullscreenSmModalComponent {

  constructor(private modalService: NgbModal) { }

  FullscreenbelowSmModal(FullscreenbelowSmContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(FullscreenbelowSmContent, { size: 'sm' });
  }


}
