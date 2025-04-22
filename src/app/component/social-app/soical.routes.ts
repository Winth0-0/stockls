import { Routes } from '@angular/router';
import { SocialAppComponent } from './social-app.component';

export const SoicalApp: Routes = [
    {
        path: '',
        component: SocialAppComponent,
        data: {
            title: "Soical App",
            breadcrumb: "Soical App",
        }
    },

];