
import { Routes } from '@angular/router';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { GroupChatComponent } from './group-chat/group-chat.component';

export const Chat: Routes = [
    {
        path: '',
        children: [
            {
                path: 'private-chat',
                component: PrivateChatComponent,
                data: {
                    title: "Promotion List",
                    breadcrumb: "Promotion List",
                }
            },
            {
                path: 'group-chat',
                component: GroupChatComponent,
                data: {
                    title: "Create Promotion",
                    breadcrumb: "Create Promotion",
                }
            },
        ]
    }
]