import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserProfile1Component } from './user-profile1/user-profile1.component';
import { UserProfile2Component } from './user-profile2/user-profile2.component';
import { UserProfile3Component } from './user-profile3/user-profile3.component';
import { UserProfile4Component } from './user-profile4/user-profile4.component';
import { UserProfile5Component } from './user-profile5/user-profile5.component';

@Component({
    selector: 'app-user-profile',
    imports: [CommonModule, UserProfile1Component, UserProfile2Component, UserProfile3Component, UserProfile4Component, UserProfile5Component],
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

}
