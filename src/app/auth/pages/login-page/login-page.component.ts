import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import SweetAlert from 'sweetalert2';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  public myForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.myForm.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        console.log('success');
        this.router.navigateByUrl('/dashboard');
      },
      error: (errorMessage) => SweetAlert.fire('Error', errorMessage, 'error'),
    });
  }
}
