import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-extra-large-modal',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './extra-large-modal.component.html',
    styleUrls: ['./extra-large-modal.component.scss']
})
export class ExtraLargeModalComponent {

  constructor(private modalService: NgbModal) { }

  ExtraLargemodal(ExtralargeContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(ExtralargeContent, { size: 'xl' });
  }

}
