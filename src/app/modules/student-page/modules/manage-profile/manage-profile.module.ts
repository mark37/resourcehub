import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ManageProfileComponent
  ],
  imports: [
    CommonModule,
    ManageProfileRoutingModule,
    FontAwesomeModule
  ]
})
export class ManageProfileModule { }
