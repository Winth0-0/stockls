import { Component } from '@angular/core';
import { knowledgebaseData } from '../../../shared/data/knowledgebase/knowledgebase';
import { CommonModule } from '@angular/common';
import { TopCommonFaqComponent } from '../../faq/top-common-faq/top-common-faq.component';

@Component({
    selector: 'app-knowledgebase-top-data',
    imports: [CommonModule, TopCommonFaqComponent],
    templateUrl: './knowledgebase-top-data.component.html',
    styleUrl: './knowledgebase-top-data.component.scss'
})
export class KnowledgebaseTopDataComponent {

  public knowledgebaseData = knowledgebaseData;

}
