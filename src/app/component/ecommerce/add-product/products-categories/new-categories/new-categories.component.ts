import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-new-categories',
    imports: [CommonModule, NgbModule, AngularEditorModule, FormsModule, ReactiveFormsModule],
    templateUrl: './new-categories.component.html',
    styleUrls: ['./new-categories.component.scss']
})

export class NewCategoriesComponent {

  public htmlContent = '';

  constructor(public activeModal: NgbActiveModal) { }


}
