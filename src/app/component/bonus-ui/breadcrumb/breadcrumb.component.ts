import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColoredBreadcrumbComponent } from './colored-breadcrumb/colored-breadcrumb.component';
import { DefaultBreadcrumbComponent } from './default-breadcrumb/default-breadcrumb.component';
import { DividerBreadcrumbComponent } from './divider-breadcrumb/divider-breadcrumb.component';
import { IconsBreadcrumbComponent } from './icons-breadcrumb/icons-breadcrumb.component';
import { VariationBreadcrumbComponent } from './variation-breadcrumb/variation-breadcrumb.component';

@Component({
    selector: 'app-breadcrumb',
    imports: [CommonModule, ColoredBreadcrumbComponent, DefaultBreadcrumbComponent, DividerBreadcrumbComponent, IconsBreadcrumbComponent, VariationBreadcrumbComponent],
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

}
