import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';

@Component({
    selector: 'app-todo-filter',
    imports: [CommonModule, FeathericonComponent, ClickOutsideDirective],
    templateUrl: './todo-filter.component.html',
    styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent {

  public open: boolean = false;

  openFilter() {
    this.open = !this.open
  }

  clickOutside():void { 
    this.open = false;
  }

}
