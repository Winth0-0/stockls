import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
    selector: 'app-interview-mail',
    imports: [CommonModule, UserDetailsComponent],
    templateUrl: './interview-mail.component.html',
    styleUrls: ['./interview-mail.component.scss']
})
export class InterviewMailComponent {

  @Output() filterValue = new EventEmitter<boolean>();

  public open: boolean = false;

  openFilter(){
    this.open =! this.open
    this.filterValue.emit(this.open)
  }

}
