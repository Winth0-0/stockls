import { Component } from '@angular/core';
import { TopProduct } from '../../../../shared/data/dashboard/online-course/online-course';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-top-product',
    imports: [RouterModule],
    templateUrl: './top-product.component.html',
    styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent {

  public TopProductData = TopProduct

}
