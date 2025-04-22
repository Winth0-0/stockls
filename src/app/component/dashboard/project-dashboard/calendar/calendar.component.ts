import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCalendar, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-calendar',
    imports: [CommonModule, NgbModule],
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  public date!: { year: number; month: number; };
  constructor(private calendar: NgbCalendar) { }

}
