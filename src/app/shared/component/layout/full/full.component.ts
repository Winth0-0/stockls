import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-full',
    imports: [CommonModule, RouterOutlet],
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss']
})
export class FullComponent {

}
