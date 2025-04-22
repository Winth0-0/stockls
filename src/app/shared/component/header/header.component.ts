import { Component, HostListener } from '@angular/core';
import { HideNavScrollService } from '../../services/hide-nav-scroll.service';
import { NavmenuService, Menu } from '../../services/navmenu.service';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { LanguageComponent } from './language/language.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ThemeComponent } from './theme/theme.component';
import { ClickOutsideDirective } from '../../directives/outside.directive';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { UsrRes } from '../../../service/app.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ThemeComponent, ClickOutsideDirective, RouterModule, FormsModule, ReactiveFormsModule,
    SvgIconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public menuItems: Menu[] = [];
  public item: Menu[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = '';
  public open = false;

  constructor(private router: Router, public hidenav: HideNavScrollService, public navmenu: NavmenuService) {
    this.navmenu.item.subscribe((menuItems: Menu[]) =>
      this.item = menuItems
    );
  }
  user: UsrRes | null = null;

  async ngOnInit(): Promise<void> {
    this.user = JSON.parse(localStorage.getItem('user') || 'null');
  }

  openMenu() {
    this.navmenu.closeSidebar = !this.navmenu.closeSidebar;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }


  openSearch() {
    this.open = !this.open
    this.searchResult = false;
  }

  languageToggle() {
    this.navmenu.language = !this.navmenu.language;
  }

  searchTerm(term: any) {
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.item.forEach((data) => {
      if (data.title?.toLowerCase().includes(term) && data.type === 'link') {
        items.push(data);
      }
      data.children?.filter(subItems => {
        if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = data.icon
          items.push(subItems);
        }
        subItems.children?.filter(suSubItems => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = data.icon
            items.push(suSubItems);
          }
        })
        return
      })
      this.checkSearchResultEmpty(items)
      this.menuItems = items
    })
    return
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add('offcanvas')
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.body.classList.remove('offcanvas')
  }

  clickOutside(): void {
    this.open = false
    this.searchResult = false;
    this.searchResultEmpty = false;
  }

}
