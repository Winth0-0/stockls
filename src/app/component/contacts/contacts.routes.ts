import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';

export const Contact: Routes = [
    {
        path: '',
        component: ContactsComponent,
        data: {
            title: "Contacts",
            breadcrumb: "Contacts",
        }
    }
]