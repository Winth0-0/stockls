import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryDataTableComponent } from './category-data-table/category-data-table.component';
import { TopSectionComponent } from '../product-list/top-section/top-section.component';

@Component({
    selector: 'app-category-page',
    imports: [CommonModule, CategoryDataTableComponent, TopSectionComponent],
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {

}
