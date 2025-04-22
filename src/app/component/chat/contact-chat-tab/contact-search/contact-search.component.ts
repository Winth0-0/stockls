import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-contact-search',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './contact-search.component.html',
    styleUrl: './contact-search.component.scss'
})
export class ContactSearchComponent {

}
