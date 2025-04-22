import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
    selector: 'app-ngx-editor',
    imports: [CommonModule, FormsModule, NgxEditorModule],
    templateUrl: './ngx-editor.component.html',
    styleUrl: './ngx-editor.component.scss'
})
export class NgxEditorComponent {

  editor: Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
