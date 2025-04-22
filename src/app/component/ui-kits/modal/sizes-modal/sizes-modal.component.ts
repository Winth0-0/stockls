import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExtraLargeModalComponent } from './extra-large-modal/extra-large-modal.component';
import { FullScreenModalComponent } from './full-screen-modal/full-screen-modal.component';
import { LargeModalComponent } from './large-modal/large-modal.component';
import { SmallModalComponent } from './small-modal/small-modal.component';

@Component({
    selector: 'app-sizes-modal',
    imports: [CommonModule, ExtraLargeModalComponent, FullScreenModalComponent, LargeModalComponent, SmallModalComponent],
    templateUrl: './sizes-modal.component.html',
    styleUrls: ['./sizes-modal.component.scss']
})
export class SizesModalComponent {

}
