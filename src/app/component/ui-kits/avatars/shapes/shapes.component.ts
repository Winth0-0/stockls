import { Component } from '@angular/core';
import { Shapes } from '../../../../shared/data/ui-kits/avavtar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shapes',
    imports: [CommonModule],
    templateUrl: './shapes.component.html',
    styleUrls: ['./shapes.component.scss']
})
export class ShapesComponent {

  public shapesData = Shapes;

}
