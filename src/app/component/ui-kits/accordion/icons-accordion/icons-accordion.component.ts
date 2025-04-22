import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IconsAccordion } from '../../../../shared/data/ui-kits/accordion'; 

@Component({
    selector: 'app-icons-accordion',
    imports: [FeathericonComponent, NgbModule, FormsModule],
    templateUrl: './icons-accordion.component.html',
    styleUrls: ['./icons-accordion.component.scss']
})
export class IconsAccordionComponent {

  public iconaccordionData = IconsAccordion;

}
