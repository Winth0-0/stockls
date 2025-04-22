import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowseArticalCategoriesComponent } from './browse-artical-categories/browse-artical-categories.component';
import { KnowledgebaseFooterDataComponent } from './knowledgebase-footer-data/knowledgebase-footer-data.component';
import { KnowledgebaseTopDataComponent } from './knowledgebase-top-data/knowledgebase-top-data.component';

@Component({
    selector: 'app-knowledgebase',
    imports: [CommonModule, BrowseArticalCategoriesComponent, KnowledgebaseFooterDataComponent, KnowledgebaseTopDataComponent],
    templateUrl: './knowledgebase.component.html',
    styleUrl: './knowledgebase.component.scss'
})
export class KnowledgebaseComponent {

}
