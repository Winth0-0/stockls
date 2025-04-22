import { Component } from '@angular/core';
import { breckpointSpecific } from '../../../../../shared/data/table/bootstrap-table/basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-breckpoint-specific',
    imports: [CommonModule],
    templateUrl: './breckpoint-specific.component.html',
    styleUrls: ['./breckpoint-specific.component.scss']
})
export class BreckpointSpecificComponent {

  public breckpointData = breckpointSpecific;

}
