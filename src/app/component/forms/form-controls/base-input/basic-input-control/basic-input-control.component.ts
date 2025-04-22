import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateTimeComponent } from './date-time/date-time.component';
import { DataListComponent } from './data-list/data-list.component';

@Component({
    selector: 'app-basic-input-control',
    imports: [CommonModule, DateTimeComponent, DataListComponent],
    templateUrl: './basic-input-control.component.html',
    styleUrls: ['./basic-input-control.component.scss']
})
export class BasicInputControlComponent {

}
