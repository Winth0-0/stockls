import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { OutlineAccordion } from '../../../../shared/data/ui-kits/accordion';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-outline-accordion',
    imports: [CommonModule, FeathericonComponent, NgbModule, FormsModule],
    templateUrl: './outline-accordion.component.html',
    styleUrls: ['./outline-accordion.component.scss']
})
export class OutlineAccordionComponent {

  public OutlineAccordionData = OutlineAccordion;

}
