import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-full-colored-variant',
    imports: [CommonModule],
    templateUrl: './full-colored-variant.component.html',
    styleUrl: './full-colored-variant.component.scss'
})
export class FullColoredVariantComponent {

  colors = ["primary", "secondary", "success", "info", "warning", "danger", "inverse"]


}
