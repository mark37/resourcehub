import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostingPageComponent } from './components/posting-page/posting-page.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    DashboardComponent,
    PostingPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    QuillModule.forRoot(),
    QuillEditorComponent,
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
