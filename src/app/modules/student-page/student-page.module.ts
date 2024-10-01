import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPageRoutingModule } from './student-page-routing.module';
import { StudentPageComponent } from './student-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  declarations: [
    StudentPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    StudentPageRoutingModule,
    FontAwesomeModule,
    FooterComponent
  ]
})
export class StudentPageModule { }
