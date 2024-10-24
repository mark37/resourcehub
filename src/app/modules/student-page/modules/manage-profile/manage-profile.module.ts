import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserInformationComponent } from '../../../../components/user-information/user-information.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageProfileComponent
  ],
  imports: [
    CommonModule,
    ManageProfileRoutingModule,
    FontAwesomeModule,
    UserInformationComponent,
    ReactiveFormsModule
  ]
})
export class ManageProfileModule { }
