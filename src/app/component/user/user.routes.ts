import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserEditComponent } from './user-edit/user-edit.component';


export const User: Routes = [
    {
        path: '',
        children: [
            {
                path: 'users-profile',
                component: UserProfileComponent,
                data: {
                    title: "User Profile",
                    breadcrumb: "Users Profile",
                }
            },
            {
                path: 'profile-edit',
                component: UserEditComponent,
                data: {
                  title: "Edit Profile",
                  breadcrumb: "Edit Profile",
                }
              },
            {
                path: 'users-cards',
                component: UserCardsComponent,
                data: {
                    title: "Users Cards",
                    breadcrumb: "Users Cards",
                }
            }

        ]
    }
]