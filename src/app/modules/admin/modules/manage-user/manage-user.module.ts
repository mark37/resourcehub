import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUserRoutingModule } from './manage-user-routing.module';
import { ManageUserComponent } from './manage-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    FontAwesomeModule
  ]
})
export class ManageUserModule { }
