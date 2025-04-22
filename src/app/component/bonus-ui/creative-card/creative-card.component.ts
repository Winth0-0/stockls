import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BorderPrimaryStateComponent } from './border-primary-state/border-primary-state.component';
import { BorderSecondaryStateComponent } from './border-secondary-state/border-secondary-state.component';
import { BorderWarningStateComponent } from './border-warning-state/border-warning-state.component';
import { CommonAbsoluteCardComponent } from './common-absolute-card/common-absolute-card.component';
import { CommonBorderCardComponent } from './common-border-card/common-border-card.component';

@Component({
    selector: 'app-creative-card',
    imports: [CommonModule, BorderPrimaryStateComponent, BorderSecondaryStateComponent, BorderWarningStateComponent,
        CommonAbsoluteCardComponent, CommonBorderCardComponent],
    templateUrl: './creative-card.component.html',
    styleUrls: ['./creative-card.component.scss']
})
export class CreativeCardComponent {

}
