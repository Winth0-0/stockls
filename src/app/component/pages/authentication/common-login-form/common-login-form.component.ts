import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-common-login-form',
    imports: [CommonModule, RouterModule, FeathericonComponent],
    templateUrl: './common-login-form.component.html',
    styleUrls: ['./common-login-form.component.scss']
})
export class CommonLoginFormComponent {


  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
  
}
