import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-error500',
    imports: [CommonModule, RouterModule],
    templateUrl: './error500.component.html',
    styleUrls: ['./error500.component.scss']
})
export class Error500Component {

}
