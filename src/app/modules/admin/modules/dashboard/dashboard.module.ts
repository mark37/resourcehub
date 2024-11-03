import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostingPageComponent } from './components/posting-page/posting-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ApplicantListComponent } from './components/applicant-list/applicant-list.component';
import { PageControllerComponent } from '../../../../components/page-controller/page-controller.component';
import { UserInformationComponent } from '../../../../components/user-information/user-information.component';
import { MessagingComponent } from './components/messaging/messaging.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PostingPageComponent,
    ApplicantListComponent,
    MessagingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    QuillModule.forRoot(),
    QuillEditorComponent,
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    PageControllerComponent,
    UserInformationComponent
  ]
})
export class DashboardModule { }
