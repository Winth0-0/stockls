import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActiveDisabledPaginationComponent } from './active-disabled-pagination/active-disabled-pagination.component';
import { AlignmentPaginationComponent } from './alignment-pagination/alignment-pagination.component';
import { DefaultPaginationComponent } from './default-pagination/default-pagination.component';
import { IconsPaginationComponent } from './icons-pagination/icons-pagination.component';
import { RoundedPaginationComponent } from './rounded-pagination/rounded-pagination.component';
import { SizingPaginationComponent } from './sizing-pagination/sizing-pagination.component';

@Component({
    selector: 'app-paginations',
    imports: [CommonModule, ActiveDisabledPaginationComponent, AlignmentPaginationComponent, DefaultPaginationComponent,
        IconsPaginationComponent, RoundedPaginationComponent, SizingPaginationComponent],
    templateUrl: './paginations.component.html',
    styleUrls: ['./paginations.component.scss']
})
export class PaginationsComponent {

}
