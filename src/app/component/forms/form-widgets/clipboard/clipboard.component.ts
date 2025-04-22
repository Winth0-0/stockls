import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClipboardOnParagraphComponent } from './clipboard-on-paragraph/clipboard-on-paragraph.component';
import { ClipboardOnTextareaComponent } from './clipboard-on-textarea/clipboard-on-textarea.component';
import { ClipboardTextInputComponent } from './clipboard-text-input/clipboard-text-input.component';
import { CopyProtionFormParagraphComponent } from './copy-protion-form-paragraph/copy-protion-form-paragraph.component';

@Component({
    selector: 'app-clipboard',
    imports: [CommonModule, ClipboardOnParagraphComponent, ClipboardOnTextareaComponent, ClipboardTextInputComponent, CopyProtionFormParagraphComponent],
    templateUrl: './clipboard.component.html',
    styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent {

}
