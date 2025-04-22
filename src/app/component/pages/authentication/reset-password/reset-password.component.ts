import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    imports: [CommonModule, RouterModule],
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }

}
