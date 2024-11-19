import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserInformationComponent } from '../../../../components/user-information/user-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeactivateAccountComponent } from './modals/deactivate-account/deactivate-account.component';


@NgModule({
  declarations: [
    ManageProfileComponent
  ],
  imports: [
    CommonModule,
    ManageProfileRoutingModule,
    FontAwesomeModule,
    UserInformationComponent,
    ReactiveFormsModule,
    DeactivateAccountComponent
  ]
})
export class ManageProfileModule { }
