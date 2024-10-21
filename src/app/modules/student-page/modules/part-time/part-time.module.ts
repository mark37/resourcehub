import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartTimeRoutingModule } from './part-time-routing.module';
import { PartTimeComponent } from './part-time.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { JobDetailsComponent } from './components/job-details/job-details.component';


@NgModule({
  declarations: [
    PartTimeComponent,
    JobDetailsComponent
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
