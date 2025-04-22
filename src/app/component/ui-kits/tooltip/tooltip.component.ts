import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicTooltipComponent } from './basic-tooltip/basic-tooltip.component';
import { ColoredTooltipComponent } from './colored-tooltip/colored-tooltip.component';
import { FilledTooltipComponent } from './filled-tooltip/filled-tooltip.component';
import { HtmlElementsHoverEffectComponent } from './html-elements-hover-effect/html-elements-hover-effect.component';
import { TooltipDirectionsComponent } from './tooltip-directions/tooltip-directions.component';

@Component({
    selector: 'app-tooltip',
    imports: [CommonModule, BasicTooltipComponent, ColoredTooltipComponent, FilledTooltipComponent, HtmlElementsHoverEffectComponent, TooltipDirectionsComponent],
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

}
