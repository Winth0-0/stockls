import { Component } from '@angular/core';
import { ProjectList } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
    selector: 'app-important-project-list',
    imports: [CommonModule, NgxSliderModule, RouterModule],
    templateUrl: './important-project-list.component.html',
    styleUrls: ['./important-project-list.component.scss']
})
export class ImportantProjectListComponent {

  public projectListData =ProjectList;

  options: Options = {
    floor: 0,
    ceil: 100
  };

}
