import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultTouchspinComponent } from './default-touchspin/default-touchspin.component';
import { ButtonsWithPrefixPostfixComponent } from './buttons-with-prefix-postfix/buttons-with-prefix-postfix.component';
import { IconsWithPrefixPostfixComponent } from './icons-with-prefix-postfix/icons-with-prefix-postfix.component';
import { OutlinedTouchspinComponent } from './outlined-touchspin/outlined-touchspin.component';
import { RoundedTouchspinComponent } from './rounded-touchspin/rounded-touchspin.component';

@Component({
    selector: 'app-touchspin',
    imports: [CommonModule, DefaultTouchspinComponent, ButtonsWithPrefixPostfixComponent, IconsWithPrefixPostfixComponent,
        OutlinedTouchspinComponent, RoundedTouchspinComponent],
    templateUrl: './touchspin.component.html',
    styleUrls: ['./touchspin.component.scss']
})
export class TouchspinComponent {

}
