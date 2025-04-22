import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';


@Component({
    selector: 'app-balance-modal',
    imports: [CommonModule, RouterModule, FeathericonComponent],
    templateUrl: './balance-modal.component.html',
    styleUrls: ['./balance-modal.component.scss']
})
export class BalanceModalComponent {

  constructor(private modalService: NgbModal) { }

  BalanceModal(Balancecontant: TemplateRef<NgbModal>) {
    const modalRef = this.modalService.open(Balancecontant, { centered: true });
  }

}
