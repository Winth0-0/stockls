import { Component } from '@angular/core';
import { ContextualClasses } from '../../../../shared/data/ui-kits/lists';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contextual-classes',
    imports: [CommonModule],
    templateUrl: './contextual-classes.component.html',
    styleUrls: ['./contextual-classes.component.scss']
})
export class ContextualClassesComponent {

  public contextualData = ContextualClasses;

}
