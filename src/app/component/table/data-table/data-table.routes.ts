import { Routes } from '@angular/router';
import { DataTableComponent } from './data-table.component'

export const DataTable: Routes = [
    {
        path: '',
        component: DataTableComponent,
        data: [
            {
                title: "Data Table",
                breadcrumb: "Data Table",
            }
        ]
    }

]
