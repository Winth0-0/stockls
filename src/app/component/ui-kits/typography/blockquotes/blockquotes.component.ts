import { Component } from '@angular/core';
import { blackqutoesData } from '../../../../shared/data/ui-kits/typogaraphy';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blockquotes',
    imports: [CommonModule],
    templateUrl: './blockquotes.component.html',
    styleUrls: ['./blockquotes.component.scss']
})
export class BlockquotesComponent {

  public blockquote = blackqutoesData;

}
