import { Component } from '@angular/core';
import { findCourse } from '../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { FindCourceComponent } from './find-cource/find-cource.component';
import { UpcomingCourceComponent } from './upcoming-cource/upcoming-cource.component';

@Component({
    selector: 'app-learning-filter',
    imports: [CommonModule, CategoriesComponent, FindCourceComponent, UpcomingCourceComponent],
    templateUrl: './learning-filter.component.html',
    styleUrls: ['./learning-filter.component.scss']
})
export class LearningFilterComponent {

  public findCourse = findCourse;
  public isCollapsed : boolean = false;
  public open: boolean = false;

  openFilter(){
    this.isCollapsed =! this.isCollapsed;
  }

  clickOutside():void { 
    this.open = false;
  }

}
