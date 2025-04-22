import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialProfileComponent } from './social-profile/social-profile.component';

@Component({
    selector: 'app-social-app',
    imports: [CommonModule, SocialProfileComponent],
    templateUrl: './social-app.component.html',
    styleUrls: ['./social-app.component.scss']
})
export class SocialAppComponent {

}
