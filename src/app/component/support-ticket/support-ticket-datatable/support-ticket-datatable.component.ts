import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { supportDB } from '../../../shared/data/support-ticket/support-ticket';
import { NgbdSortableHeader2, SortEvent } from '../../../shared/directives/support-ticket.directive';
import { SupportTicketService } from '../../../shared/services/support-ticket.service';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-support-ticket-datatable',
    imports: [NgbdSortableHeader2, CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
    providers: [SupportTicketService, DecimalPipe],
    templateUrl: './support-ticket-datatable.component.html',
    styleUrl: './support-ticket-datatable.component.scss'
})
export class SupportTicketDatatableComponent {

  public countries$: Observable<supportDB[]>;
  public Data: supportDB[];
  public total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader2) headers: QueryList<NgbdSortableHeader2>;

  constructor(public service: SupportTicketService) {
    this.countries$ = service.support$;
    this.total$ = service.total$;
  }


  ngOnInit() {
    this.countries$.subscribe((res) => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
