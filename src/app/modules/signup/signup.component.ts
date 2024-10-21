import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  faArrowLeft = faArrowLeft;

  showSignupPage: boolean = false;
  withStudentEmail: boolean = false;

  openSignUpPage(option: boolean) {
    this.showSignupPage = true;
    this.withStudentEmail = option;
  }

  closeSignUpPage(){
    this.showSignupPage = false;
  }

  navigateTo(location: string) {
    this.router.navigate([location])
  }

  constructor (
    private router: Router
  ) { }
}
