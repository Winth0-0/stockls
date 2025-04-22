import { Component } from '@angular/core';
import { navigationData1} from '../../../shared/data/faq/faq';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-navigation',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public navigationData1 = navigationData1;


}
