import { Routes } from '@angular/router';
import { ComingSimpleComponent } from './coming-simple/coming-simple.component';
import { ComingBgImageComponent } from './coming-bg-image/coming-bg-image.component';
import { ComingBgVideoComponent } from './coming-bg-video/coming-bg-video.component'


export const CommingSoonPages: Routes = [
    {
        path: '',
        children: [
          {
            path: 'coming-soon-simple',
            component: ComingSimpleComponent
          },
          {
            path: 'coming-soon-video',
            component: ComingBgVideoComponent
          },
          {
            path: 'coming-soon-image',
            component: ComingBgImageComponent 
          },
        ]
       }
];