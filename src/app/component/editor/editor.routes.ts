import { Routes } from '@angular/router';
import { NgxEditorComponent } from './ngx-editor/ngx-editor.component';
import { MdeEditorsComponent } from './mde-editors/mde-editors.component';

export const Editor: Routes = [
    {
        path: '',
        children: [
            {
                path: 'ngx-editors',
                component: NgxEditorComponent,
                data: {
                    title: 'Ngx Editor',
                    breadcrumb: 'Ngx Editor'
                }
            },
            {
                path: 'mde-editors',
                component: MdeEditorsComponent,
                data: {
                    title: 'MDE Editor',
                    breadcrumb: 'MDE Editor'
                }
            }
        ]
    }
]