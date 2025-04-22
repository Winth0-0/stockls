import { Component } from '@angular/core';
import { FlushAccordion } from '../../../../shared/data/ui-kits/accordion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-flush-accordion',
    imports: [CommonModule, NgbModule],
    templateUrl: './flush-accordion.component.html',
    styleUrls: ['./flush-accordion.component.scss']
})
export class FlushAccordionComponent {

  public flushAccordionData = FlushAccordion;

}
