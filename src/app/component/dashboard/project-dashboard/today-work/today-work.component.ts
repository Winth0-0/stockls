import { Component } from '@angular/core';
import { todayWork } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-today-work',
    imports: [CommonModule, RouterModule],
    templateUrl: './today-work.component.html',
    styleUrls: ['./today-work.component.scss']
})
export class TodayWorkComponent {

  public todayWorkData = todayWork;

}
