import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-compose-email',
    imports: [CommonModule, AngularEditorModule, FormsModule, ReactiveFormsModule],
    templateUrl: './compose-email.component.html',
    styleUrls: ['./compose-email.component.scss']
})
export class ComposeEmailComponent {

  public isShow : boolean = false;
  public isShow1 : boolean = false;

  public htmlContent = '';
  
  public loginForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) { }


  myGroup = new FormGroup({
    email: new FormControl()
 });

}
