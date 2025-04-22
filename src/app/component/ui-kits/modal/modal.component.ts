import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { CenteredModalComponent } from './centered-modal/centered-modal.component';
import { CustomModalsComponent } from './custom-modals/custom-modals.component';
import { FullscreenModalsComponent } from './fullscreen-modals/fullscreen-modals.component';
import { SizesModalComponent } from './sizes-modal/sizes-modal.component';
import { StaticBackdropModalComponent } from './static-backdrop-modal/static-backdrop-modal.component';
import { ToggleModalsComponent } from './toggle-modals/toggle-modals.component';

@Component({
    selector: 'app-modal',
    imports: [CommonModule, BasicModalComponent, CenteredModalComponent, CustomModalsComponent, FullscreenModalsComponent,
        SizesModalComponent, StaticBackdropModalComponent, ToggleModalsComponent],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

}
