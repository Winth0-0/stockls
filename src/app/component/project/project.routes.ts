import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewComponent } from './create-new/create-new.component';

export const Project: Routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: ProjectListComponent,
                data: {
                    title: "Project List",
                    breadcrumb: "Project List",
                }
            },
            {
                path: 'create',
                component: CreateNewComponent,
                data: {
                    title: "Project Create",
                    breadcrumb: "Project Create",
                }
            },
        ]
    }
];