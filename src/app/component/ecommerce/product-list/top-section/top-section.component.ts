import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-top-section',
    imports: [CommonModule, FeathericonComponent, RouterModule],
    templateUrl: './top-section.component.html',
    styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent {

  public togglecollpese = false;

  toggle(){
    this.togglecollpese = !this.togglecollpese;
  }

}
