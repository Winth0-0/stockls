import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimpleAccordionComponent } from './simple-accordion/simple-accordion.component';
import { FlushAccordionComponent } from './flush-accordion/flush-accordion.component';
import { IconsAccordionComponent } from './icons-accordion/icons-accordion.component';
import { OutlineAccordionComponent } from './outline-accordion/outline-accordion.component';
import { MultipleCollapseAccordionComponent } from './multiple-collapse-accordion/multiple-collapse-accordion.component';
import { CollapseAccordionComponent } from './collapse-accordion/collapse-accordion.component';
import { HorizontalAccordionComponent } from './horizontal-accordion/horizontal-accordion.component';

@Component({
    selector: 'app-accordion',
    imports: [CommonModule, SimpleAccordionComponent, FlushAccordionComponent, IconsAccordionComponent, OutlineAccordionComponent,
        MultipleCollapseAccordionComponent, CollapseAccordionComponent, HorizontalAccordionComponent],
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

}
