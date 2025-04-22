import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewUser } from '../../../../shared/data/dashboard/online-course/online-course';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-new-user',
    imports: [RouterModule, ClickOutsideDirective],
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  public newUserData = NewUser;

  open(id: number) {
    this.newUserData.filter((data) => {
      if (data.id == id) {
        data.isShow = !data.isShow;
      }
    })
  }

}
