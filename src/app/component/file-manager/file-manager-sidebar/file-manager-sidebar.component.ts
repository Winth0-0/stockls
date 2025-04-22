import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-file-manager-sidebar',
    imports: [CommonModule, FeathericonComponent, ClickOutsideDirective],
    templateUrl: './file-manager-sidebar.component.html',
    styleUrls: ['./file-manager-sidebar.component.scss']
})
export class FileManagerSidebarComponent {

  public open: boolean = false;

  openFilter() {
    this.open = !this.open
  }

  clickOutside(): void {
    this.open = false;
  }


}
