import { Component } from '@angular/core';
import { BookmarkSidemenuComponent } from './bookmark-sidemenu/bookmark-sidemenu.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bookmarks',
    imports: [CommonModule, BookmarkSidemenuComponent],
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {

}
