import { Component } from '@angular/core';
import { whislist } from '../../../shared/data/ecommerce/wishlist';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-wishlist',
    imports: [CommonModule, RouterModule],
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  public wishlistData = whislist;

}
