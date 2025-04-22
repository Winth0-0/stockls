import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonInfoCardComponent } from './common-info-card/common-info-card.component';
import { DarkCardComponent } from './dark-card/dark-card.component';
import { FlatCardComponent } from './flat-card/flat-card.component';
import { IconHeadingComponent } from './icon-heading/icon-heading.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { WithoutShadowCardComponent } from './without-shadow-card/without-shadow-card.component';

@Component({
    selector: 'app-basic-card',
    imports: [CommonModule, CommonInfoCardComponent, DarkCardComponent, FlatCardComponent, IconHeadingComponent,
        SimpleCardComponent, WithoutShadowCardComponent],
    templateUrl: './basic-card.component.html',
    styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {

}
