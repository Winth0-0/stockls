import { Routes } from '@angular/router';
import { HideNavScrollComponent } from './hide-nav-scroll/hide-nav-scroll.component';

export const hidenav: Routes = [
    {
        path: '',
        children: [
            {
                path: 'hide-nav-scroll',
                component: HideNavScrollComponent,
                data: {
                    title: "Hide Menu On Scrolll",
                    breadcrumb: "Hide Menu On Scrolll",
                },
            },
        ]
    }
];