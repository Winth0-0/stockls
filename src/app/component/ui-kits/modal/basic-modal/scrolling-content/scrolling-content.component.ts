import { Component, TemplateRef } from '@angular/core';
import { ModalData } from '../../../../../shared/data/ui-kits/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-scrolling-content',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './scrolling-content.component.html',
    styleUrls: ['./scrolling-content.component.scss']
})
export class ScrollingContentComponent {

  public scrollData = ModalData;
  constructor(private modalService: NgbModal) { }

  scrollingModal(scrollingContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(scrollingContent);
  }


}
