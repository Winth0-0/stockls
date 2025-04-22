import { Component, HostListener } from '@angular/core';
import { HideNavScrollService } from '../../../shared/services/hide-nav-scroll.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hide-nav-scroll',
    imports: [CommonModule],
    templateUrl: './hide-nav-scroll.component.html',
    styleUrls: ['./hide-nav-scroll.component.scss']
})
export class HideNavScrollComponent {

  public show: boolean = false;

  constructor(private hidenav: HideNavScrollService) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 400) {
      this.hidenav.show = true;
    } else {
      this.hidenav.show = false;
    }
  }

}
