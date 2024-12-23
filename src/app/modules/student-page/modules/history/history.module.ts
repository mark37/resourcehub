import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostDetailsComponent } from '../../../../components/post-details/post-details.component';
import { CancelApplicationComponent } from './modals/cancel-application/cancel-application.component';


@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    FormsModule,
    FontAwesomeModule,
    PostDetailsComponent,
    CancelApplicationComponent
  ]
})
export class HistoryModule { }
