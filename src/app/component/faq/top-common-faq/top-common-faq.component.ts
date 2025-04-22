import { Component, Input } from '@angular/core';
import { faqTopPart } from '../../../shared/data/faq/faq';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-top-common-faq',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './top-common-faq.component.html',
    styleUrls: ['./top-common-faq.component.scss']
})
export class TopCommonFaqComponent {

  @Input() data : faqTopPart[];

}
