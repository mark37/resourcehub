import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoRecentComponent } from '../../components/no-recent/no-recent.component';
import { RecentScholarhipComponent } from './components/recent-scholarhip/recent-scholarhip.component';
import { RecentPartTimeComponent } from './components/recent-part-time/recent-part-time.component';
import { PostDetailsComponent } from '../../../../components/post-details/post-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RecentScholarhipComponent,
    RecentPartTimeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    NoRecentComponent,
    PostDetailsComponent
  ]
})
export class DashboardModule { }
