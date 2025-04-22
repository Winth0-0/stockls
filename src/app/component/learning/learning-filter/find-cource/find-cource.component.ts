import { Component } from '@angular/core';
import { findCourse } from '../../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-find-cource',
    imports: [CommonModule, FeathericonComponent, NgbModule],
    templateUrl: './find-cource.component.html',
    styleUrls: ['./find-cource.component.scss']
})
export class FindCourceComponent {

  public findCourse = findCourse;
  public isCollapsed = false;

}
