import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCheckCircle = faCheckCircle;

  resetForm: FormGroup = new FormGroup({
    email: new FormControl<string|null>(null),
    password: new FormControl<string|null>(null),
    password_confirmation: new FormControl<string|null>(null),
    token: new FormControl<string|null>(null)
  });

  showPassTxt: boolean = false;

  togglePassInput() {
    this.showPassTxt = !this.showPassTxt;
  }

  is_saving: boolean = false;
  success_change: boolean = false;
  error_message!: string;
  onSubmit(){
    this.is_saving = true;
    console.log(this.resetForm.value)
    this.http.resetPass(this.resetForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.is_saving = false;
        this.success_change = true;
      },
      error: err => {
        console.log(err);
        this.error_message = err.error.email[0];
        this.is_saving = false;
      }
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let query_params: {email: string, token: string};
    this.route.queryParams.subscribe(params => {
      console.log(params)
      query_params = {email: params['email'], token: params['token']};

      this.resetForm = this.formBuilder.group({
        email: [query_params.email, [Validators.required, Validators.email]],
        password: [null, [Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*\\-_]).{6,}$')]],
        password_confirmation: [null, [Validators.required, Validators.minLength(6)]],
        token: [query_params.token, [Validators.required]]
      });
    });

    console.log(this.resetForm.value)
  }
}
