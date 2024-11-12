import { Component } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorLabelComponent } from '../../shared/components/error-label/error-label.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { faCircleNotch, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ErrorLabelComponent, ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faCircleNotch = faCircleNotch;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  formSubmitted: boolean = false;
  isLoading: boolean = false;
  showError: boolean = false;
  errors_message!: string;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string|null>(null),
    password: new FormControl<string|null>(null)
  });

  emailResetForm: FormGroup = new FormGroup({
    email: new FormControl<string|null>(null)
  });

  showForgotPass: boolean = false;
  toggleForgotPass() {
    if(!this.emailResetForm.value.email) {
      this.emailResetForm = this.formBuilder.nonNullable.group({
        email: [null, [Validators.required, Validators.email]],
      });
    }
    this.showForgotPass = !this.showForgotPass;
  }

  isInputPass: boolean = true;
  togglePassword() {
    this.isInputPass = !this.isInputPass
  }

  reset_message: string | null = null;
  reset_err_message: string | null = null;
  resetting_pass: boolean = false;
  resetPassword() {
    this.resetting_pass = true;
    console.log(this.emailResetForm.value)
    this.http.forgotPass(this.emailResetForm.value).subscribe({
      next: (data: any) => {
        console.log(data)
        this.resetting_pass = false;
        this.reset_message = data.status;
      },
      error: err => {console.log(err); this.resetting_pass = false; this.reset_err_message = err.error.email}
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.isLoading = true;
      this.http.login(this.loginForm.value).subscribe({
        next: (data: any) => {
          // console.log(data)
          localStorage.setItem('access_token', data.data.token);

          if(data.data.user.is_admin) {
            this.router.navigate(['/admin'])
          } else {
            this.router.navigate(['/student'])
          }

          this.isLoading = false
        },
        error: err => {console.log(err)
          this.showError = true;
          this.errors_message = err.error.message;
          this.isLoading = false
        }
      })
    } else {
      this.formSubmitted = true;
    }
  }

  constructor (
    private http: HttpService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.nonNullable.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
}
