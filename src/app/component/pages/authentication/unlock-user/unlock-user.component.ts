import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-unlock-user',
    imports: [CommonModule, RouterModule],
    templateUrl: './unlock-user.component.html',
    styleUrls: ['./unlock-user.component.scss']
})
export class UnlockUserComponent {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

}
