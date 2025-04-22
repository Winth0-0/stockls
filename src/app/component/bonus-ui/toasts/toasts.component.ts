import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColorsSchemesToastsComponent } from './colors-schemes-toasts/colors-schemes-toasts.component';
import { DefaultToastsComponent } from './default-toasts/default-toasts.component';
import { LiveToastComponent } from './live-toast/live-toast.component';
import { StackingToastsComponent } from './stacking-toasts/stacking-toasts.component';
import { TranslucentToastsComponent } from './translucent-toasts/translucent-toasts.component';
import { UniqueToastComponent } from './unique-toast/unique-toast.component';

@Component({
    selector: 'app-toasts',
    imports: [CommonModule, ColorsSchemesToastsComponent, DefaultToastsComponent, LiveToastComponent,
        StackingToastsComponent, TranslucentToastsComponent, UniqueToastComponent],
    templateUrl: './toasts.component.html',
    styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent {



}
