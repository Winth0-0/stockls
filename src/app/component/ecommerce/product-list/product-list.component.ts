import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDataTableComponent } from './product-data-table/product-data-table.component';
import { TopSectionComponent } from './top-section/top-section.component';


@Component({
    selector: 'app-product-list',
    imports: [CommonModule, ProductDataTableComponent, TopSectionComponent],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

}
