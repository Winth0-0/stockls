import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackgroundColorsComponent } from './background-colors/background-colors.component';
import { BorderColorComponent } from './border-color/border-color.component';
import { DisplaysBordersComponent } from './displays-borders/displays-borders.component';
import { FontSizesComponent } from './font-sizes/font-sizes.component';
import { FontStyleComponent } from './font-style/font-style.component';
import { FontWeightClassesComponent } from './font-weight-classes/font-weight-classes.component';
import { ImagesSizesComponent } from './images-sizes/images-sizes.component';
import { MarginComponent } from './margin/margin.component';
import { OneSidePaddingComponent } from './one-side-padding/one-side-padding.component';
import { OneSideMarginComponent } from './one-side-margin/one-side-margin.component';
import { PaddingComponent } from './padding/padding.component';
import { StylesBordersComponent } from './styles-borders/styles-borders.component';
import { TextColorsComponent } from './text-colors/text-colors.component';

@Component({
    selector: 'app-helper-classes',
    imports: [CommonModule, BackgroundColorsComponent, BorderColorComponent, DisplaysBordersComponent, FontSizesComponent,
        FontStyleComponent, FontWeightClassesComponent, ImagesSizesComponent, MarginComponent, OneSidePaddingComponent, OneSideMarginComponent,
        PaddingComponent, StylesBordersComponent, TextColorsComponent],
    templateUrl: './helper-classes.component.html',
    styleUrls: ['./helper-classes.component.scss']
})
export class HelperClassesComponent {

}
