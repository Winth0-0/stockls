import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-register-form',
    imports: [CommonModule, RouterModule, FeathericonComponent],
    templateUrl: './common-register-form.component.html',
    styleUrls: ['./common-register-form.component.scss']
})
export class CommonRegisterFormComponent {

  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }


}
