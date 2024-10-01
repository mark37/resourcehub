import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicateRoutingModule } from './communicate-routing.module';
import { CommunicateComponent } from './communicate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommunicateComponent
  ],
  imports: [
    CommonModule,
    CommunicateRoutingModule,
    FontAwesomeModule,
    QuillModule.forRoot(),
    FormsModule,
    QuillEditorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunicateModule { }
