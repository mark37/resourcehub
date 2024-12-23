import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScholarshipRoutingModule } from './scholarship-routing.module';
import { ScholarshipComponent } from './scholarship.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { ApplyNowComponent } from './components/apply-now/apply-now.component';
import { PostDetailsComponent } from '../../../../components/post-details/post-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ScholarshipComponent
  ],
  imports: [
    CommonModule,
    ScholarshipRoutingModule,
    FontAwesomeModule,
    ViewDetailsComponent,
    ApplyNowComponent,
    PostDetailsComponent,
    FormsModule
  ]
})
export class ScholarshipModule { }
