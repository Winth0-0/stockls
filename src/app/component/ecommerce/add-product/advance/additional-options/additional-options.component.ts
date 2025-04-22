import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-additional-options',
    imports: [CommonModule, AngularEditorModule, NgbModule, ReactiveFormsModule, FormsModule],
    templateUrl: './additional-options.component.html',
    styleUrls: ['./additional-options.component.scss']
})
export class AdditionalOptionsComponent {

  public htmlContent = '';

  myForm = new FormGroup({
    title: new FormControl(),
    htmlContent:new FormControl(),
  });



}
