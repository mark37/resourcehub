import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { TermsOfUseComponent } from '../../components/terms-of-use/terms-of-use.component';
import { UserAgreementComponent } from '../../components/user-agreement/user-agreement.component';


@NgModule({
  declarations: [
    SignupComponent,
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FontAwesomeModule,
    TermsOfUseComponent,
    UserAgreementComponent
  ]
})
export class SignupModule { }
