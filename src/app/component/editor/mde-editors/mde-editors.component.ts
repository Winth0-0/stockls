import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
    selector: 'app-mde-editors',
    imports: [CommonModule, AngularEditorModule, FormsModule],
    templateUrl: './mde-editors.component.html',
    styleUrl: './mde-editors.component.scss'
})
export class MdeEditorsComponent implements OnInit {

  public htmlContent = '';

  constructor() { }
    ngOnInit(): void {
 }


}
