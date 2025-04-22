import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-simple',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './simple.component.html',
    styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {

  constructor(private modalService: NgbModal) { }

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(simpleContent);
  }

}
