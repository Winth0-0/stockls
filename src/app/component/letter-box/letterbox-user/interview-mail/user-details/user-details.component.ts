import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
    selector: 'app-user-details',
    imports: [CommonModule, AngularEditorModule, FormsModule, ReactiveFormsModule],
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  public isOpen: boolean = false;
  public htmlContent = '';

  openMenu() {
    this.isOpen = !this.isOpen;
  }

}
