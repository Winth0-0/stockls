import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactSidemenuComponent } from './contact-sidemenu/contact-sidemenu.component';

@Component({
    selector: 'app-contacts',
    imports: [CommonModule, ContactSidemenuComponent],
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

}
