import { Component } from '@angular/core';
import { simpleAccordion } from '../../../../shared/data/ui-kits/accordion';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-simple-accordion',
    imports: [CommonModule, NgbModule, FeathericonComponent],
    templateUrl: './simple-accordion.component.html',
    styleUrls: ['./simple-accordion.component.scss']
})
export class SimpleAccordionComponent {

  public simpleAccordionData = simpleAccordion;

}
