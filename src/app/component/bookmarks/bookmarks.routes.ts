import { Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks.component';

export const Bookmarks: Routes = [
    {
        path: '',
        component: BookmarksComponent,
        data: {
            title: 'Bookmarks',
            breadcrumb: 'Bookmarks'
        }
    }
]