import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-brand',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

}
