import { Component } from '@angular/core';
import { SupportTicketListComponent } from './support-ticket-list/support-ticket-list.component';
import { SupportTicketDatatableComponent } from './support-ticket-datatable/support-ticket-datatable.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-support-ticket',
    imports: [CommonModule, SupportTicketDatatableComponent, SupportTicketListComponent],
    templateUrl: './support-ticket.component.html',
    styleUrl: './support-ticket.component.scss'
})
export class SupportTicketComponent {

}
