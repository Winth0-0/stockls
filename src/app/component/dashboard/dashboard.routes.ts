import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';

export const dashboard: Routes = [
    {
        path: '',
        children: [
            {
                path: 'default',
                component: DefaultComponent,
                data: {
                    title: 'Default Dashboard',
                    breadcrumb: 'Default'
                },
            },
            {
                path: 'ecommerce',
                component: EcommerceComponent,
                data: {
                    title: 'Order Management',
                    breadcrumb: 'OrderManagement'
                },
            }
        ]
    }
];