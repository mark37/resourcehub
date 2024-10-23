import { Component } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorLabelComponent } from '../../shared/components/error-label/error-label.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
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

  formSubmitted: boolean = false;
  isLoading: boolean = false;
  showError: boolean = false;
  errors_message!: string;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string|null>(null),
    password: new FormControl<string|null>(null)
  });

  onSubmit() {
    if(this.loginForm.valid) {
      this.isLoading = true;
      this.http.login(this.loginForm.value).subscribe({
        next: (data: any) => {
          const parts = data.data.token.split('.');
          const header = JSON.parse(atob(parts[0]));
          const payload = JSON.parse(atob(parts[1]));

          console.log(header, payload)
          this.isLoading = false
          localStorage.setItem('access_token', data.data.token);
          this.router.navigate(['/student'])
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
