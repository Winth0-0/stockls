import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { questionData } from '../../../shared/data/faq/faq';
import { NgbAccordionConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-questions',
    imports: [CommonModule, NgbModule, FeathericonComponent],
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  public questionData = questionData;

  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;
  }	

}
