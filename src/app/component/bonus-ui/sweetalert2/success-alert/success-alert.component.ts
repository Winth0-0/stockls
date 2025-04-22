import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-success-alert',
    imports: [CommonModule],
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent {

  success() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonColor: 'var(--theme-deafult)',
    })
  }

}
