import { Component } from '@angular/core';
import { TopClientList } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-top-client-list',
    imports: [CommonModule, RouterModule],
    templateUrl: './top-client-list.component.html',
    styleUrls: ['./top-client-list.component.scss']
})
export class TopClientListComponent {

  public TopClientData = TopClientList;

}
