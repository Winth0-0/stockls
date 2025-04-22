import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-small-modal',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './small-modal.component.html',
    styleUrls: ['./small-modal.component.scss']
})
export class SmallModalComponent {

  constructor(private modalService: NgbModal) { }

  SmallModal(smallContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(smallContent, { size: 'sm' });
  }

}
