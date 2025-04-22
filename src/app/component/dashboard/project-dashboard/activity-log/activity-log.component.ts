import { Component } from '@angular/core';
import { ActivityLog } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-activity-log',
    imports: [CommonModule, RouterModule, ClickOutsideDirective],
    templateUrl: './activity-log.component.html',
    styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {

  public activityLogData = ActivityLog; 
  public isOpen :boolean =false;

  open(){
    this.isOpen = !this.isOpen
  }

  clickOutside():void { 
    this.isOpen = false;
  }

}
