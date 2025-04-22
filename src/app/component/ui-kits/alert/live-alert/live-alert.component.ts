import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-live-alert',
    imports: [CommonModule],
    templateUrl: './live-alert.component.html',
    styleUrls: ['./live-alert.component.scss']
})
export class LiveAlertComponent {

  public showLog = false;
  public counter: number = 0;
  public array: number[] = []

  onShowLog() {
    this.showLog = true;
    this.counter++;
    this.array.push(this.counter);
  }

  close(Data: number) {
    this.array.splice(this.array.indexOf(Data), 1);
  }

}
