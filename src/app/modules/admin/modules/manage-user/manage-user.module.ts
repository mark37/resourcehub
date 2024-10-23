import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUserRoutingModule } from './manage-user-routing.module';
import { ManageUserComponent } from './manage-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageControllerComponent } from '../../../../components/page-controller/page-controller.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    FontAwesomeModule,
    PageControllerComponent,
    FormsModule
  ]
})
export class ManageUserModule { }
