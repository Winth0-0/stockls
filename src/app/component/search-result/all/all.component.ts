import { Component } from '@angular/core';
import { allData } from '../../../shared/data/search-result/search-result';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-all',
    imports: [CommonModule],
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss']
})
export class AllComponent {

  public allData = allData;

}
