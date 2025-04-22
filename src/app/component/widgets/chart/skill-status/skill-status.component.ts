import { Component } from '@angular/core';
import { SkillStatus } from './../../../../shared/data/widgets/chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-skill-status',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './skill-status.component.html',
    styleUrls: ['./skill-status.component.scss']
})
export class SkillStatusComponent {

  public skillstauschart = SkillStatus;

}
