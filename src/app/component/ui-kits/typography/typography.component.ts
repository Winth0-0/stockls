import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlockquotesComponent } from './blockquotes/blockquotes.component';
import { ColoredHeadingsComponent } from './colored-headings/colored-headings.component';
import { DisplayHeadingsComponent } from './display-headings/display-headings.component';
import { FontWeightComponent } from './font-weight/font-weight.component';
import { HeadingsComponent } from './headings/headings.component';
import { InlineTextElementsComponent } from './inline-text-elements/inline-text-elements.component';
import { ListingTypographyComponent } from './listing-typography/listing-typography.component';
import { TextColorComponent } from './text-color/text-color.component';

@Component({
    selector: 'app-typography',
    imports: [CommonModule, BlockquotesComponent, ColoredHeadingsComponent, DisplayHeadingsComponent, FontWeightComponent, HeadingsComponent,
        InlineTextElementsComponent, ListingTypographyComponent, TextColorComponent],
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {

}
