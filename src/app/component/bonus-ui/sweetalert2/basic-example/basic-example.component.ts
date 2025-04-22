import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-basic-example',
    imports: [CommonModule],
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss']
})
export class BasicExampleComponent {

  basicAlert() {
    Swal.fire({
      title: 'Welcome! to the Riho theme',
      confirmButtonColor: 'var(--theme-deafult)',
    })
  }

}
