import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OpenModalRihoComponent } from './open-modal-riho/open-modal-riho.component';
import { ScrollingContentComponent } from './scrolling-content/scrolling-content.component';
import { SimpleComponent } from './simple/simple.component';
import { TooltipsPopoversComponent } from './tooltips-popovers/tooltips-popovers.component';

@Component({
    selector: 'app-basic-modal',
    imports: [CommonModule, OpenModalRihoComponent, ScrollingContentComponent, SimpleComponent, TooltipsPopoversComponent],
    templateUrl: './basic-modal.component.html',
    styleUrls: ['./basic-modal.component.scss']
})
export class BasicModalComponent {

}
