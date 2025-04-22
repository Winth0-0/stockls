import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FullscreenLgModalComponent } from './fullscreen-lg-modal/fullscreen-lg-modal.component';
import { FullscreenMdModalComponent } from './fullscreen-md-modal/fullscreen-md-modal.component';
import { FullscreenSmModalComponent } from './fullscreen-sm-modal/fullscreen-sm-modal.component';
import { FullscreenUiModalComponent } from './fullscreen-ui-modal/fullscreen-ui-modal.component';
import { FullscreenXlModalComponent } from './fullscreen-xl-modal/fullscreen-xl-modal.component';
import { FullscreenXxlModalComponent } from './fullscreen-xxl-modal/fullscreen-xxl-modal.component';

@Component({
    selector: 'app-fullscreen-modals',
    imports: [CommonModule, FullscreenLgModalComponent, FullscreenMdModalComponent, FullscreenSmModalComponent, FullscreenUiModalComponent,
        FullscreenXlModalComponent, FullscreenXxlModalComponent],
    templateUrl: './fullscreen-modals.component.html',
    styleUrls: ['./fullscreen-modals.component.scss']
})
export class FullscreenModalsComponent {

}
