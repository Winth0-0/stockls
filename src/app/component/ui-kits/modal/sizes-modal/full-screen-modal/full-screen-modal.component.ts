import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-full-screen-modal',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './full-screen-modal.component.html',
    styleUrls: ['./full-screen-modal.component.scss']
})
export class FullScreenModalComponent {

  constructor(private modalService: NgbModal) { }

  FullScreenModal(fullScreenContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(fullScreenContent, { fullscreen: true });
  }

}
