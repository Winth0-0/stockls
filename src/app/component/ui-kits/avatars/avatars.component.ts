import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GroupingComponent } from './grouping/grouping.component';
import { RatioComponent } from './ratio/ratio.component';
import { ShapesComponent } from './shapes/shapes.component';
import { SizesComponent } from './sizes/sizes.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';

@Component({
    selector: 'app-avatars',
    imports: [CommonModule, GroupingComponent, RatioComponent, ShapesComponent, SizesComponent, StatusIndicatorComponent],
    templateUrl: './avatars.component.html',
    styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent {

}
