import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  faArrowLeft = faArrowLeft;

  showSignupPage: boolean = true;
  withStudentEmail: boolean = false;

  openSignUpPage(option: boolean) {
    this.showSignupPage = true;
    this.withStudentEmail = option;
  }
}
