import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartTimeRoutingModule } from './part-time-routing.module';
import { PartTimeComponent } from './part-time.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from '../../../../components/post-details/post-details.component';


@NgModule({
  declarations: [
    PartTimeComponent
  ],
  imports: [
    CommonModule,
    PartTimeRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule,
    RouterModule,
    FormsModule,
    JobDetailsComponent,
    PostDetailsComponent
  ]
})
export class PartTimeModule { }
