import { Routes } from '@angular/router';
import { SamplePageComponent } from './sample-page.component'

export const SamplePage: Routes = [
    {

        path: '',
        component: SamplePageComponent,
        data: {
            title: "Sample Page",
            breadcrumb: "Sample Page",

        }
    },
]