import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  private formBuilder = inject(FormBuilder);
  private validatorsService = inject(ValidatorsService);

  public myForm: FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
      ],
    }
  );

  register() {
    console.log(this.myForm.value);
  }
}
