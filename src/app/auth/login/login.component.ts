import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FeathericonComponent } from '../../shared/component/feathericon/feathericon.component';
import { CommonModule } from '@angular/common';
import { ApiService, login } from '../../service/app.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public show: boolean = false;
  public loginForm: FormGroup;

  constructor(private service: ApiService, private fb: FormBuilder, public router: Router) { }

  usr: string = '';
  pass: string = '';

  showPassword() {
    this.show = !this.show;
  }

  async login() {
    const input = new login(
      this.usr,
      this.pass
    );
    try {
      const res = await this.service.login(input);
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/dashboard/default']);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed, please check your credentials.');
    }
  }


}
