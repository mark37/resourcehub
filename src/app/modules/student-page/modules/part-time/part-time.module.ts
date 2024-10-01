import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartTimeRoutingModule } from './part-time-routing.module';
import { PartTimeComponent } from './part-time.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PartTimeComponent
  ],
  imports: [
    CommonModule,
    PartTimeRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule,
    RouterModule
  ]
})
export class PartTimeModule { }
