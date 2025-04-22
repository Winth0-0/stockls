import { Component } from '@angular/core';
import { Categories } from '../../../../shared/data/learning/learning';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-categories',
    imports: [CommonModule, NgbModule],
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  public Categories = Categories;
  public isCollapsed = false;

}
