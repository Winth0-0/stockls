import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-forget-password',
    imports: [CommonModule, RouterModule],
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }

}
