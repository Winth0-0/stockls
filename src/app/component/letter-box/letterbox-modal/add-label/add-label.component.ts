import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-add-label',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './add-label.component.html',
    styleUrls: ['./add-label.component.scss']
})
export class AddLabelComponent {


  public loginForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) { }

  public myGroup = new FormGroup({
    email: new FormControl(),
    color: new FormControl()

  });

}
