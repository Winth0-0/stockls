import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-open-modal-riho',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
    templateUrl: './open-modal-riho.component.html',
    styleUrls: ['./open-modal-riho.component.scss']
})
export class OpenModalRihoComponent {

  public validate = false;

  constructor(private modalService: NgbModal) { }

  public submit() {
    this.validate = !this.validate;
    this.validate = true;
  }

  OpenModal(openmodal: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(openmodal);
  }

}
