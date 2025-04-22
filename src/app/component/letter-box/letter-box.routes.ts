import { Routes } from '@angular/router';
import { LetterBoxComponent } from './letter-box.component';

export const Email: Routes = [
  {
    path: '',
    component:LetterBoxComponent ,
    data : {
      breadcrumb : 'Letter Box'
    }
  }
]