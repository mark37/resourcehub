import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCakeCandles, faEnvelope, faFilePdf, faLocationDot, faPrint } from '@fortawesome/free-solid-svg-icons';
import { NgxPrintElementComponent, NgxPrintElementDirective, NgxPrintElementService } from 'ngx-print-element';
import { ViewDocumentsComponent } from './modals/view-documents/view-documents.component';
import { ViewDetailsComponent } from "../../modules/student-page/modules/scholarship/components/view-details/view-details.component";

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgxPrintElementDirective, ViewDocumentsComponent, ViewDetailsComponent],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent implements OnChanges{
  @ViewChild('tableRef') tableElement!: ElementRef<HTMLTableElement>;
  @ViewChild('printSection', { static: false }) printSection!: ElementRef;

  @Input() selected_user!: any;

  faCakeCandles = faCakeCandles;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
  faPrint = faPrint;
  faFilePdf = faFilePdf;

  user!: any;
  modals: any = [];
  selected_data!: any;
  viewPhoto(name: string, data?: any) {
    this.selected_data = data;
    this.modals[name] = !this.modals[name]
  }

  onPrint1(el: ElementRef<HTMLTableElement | HTMLElement>) {
    console.log(el)
    this.print.print(el).subscribe(console.log)
  }

  constructor (
    private http: HttpService,
    private print: NgxPrintElementService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.user = this.selected_user;
    console.log(this.user)
    if(!this.user.user_education && this.user.education) this.user.user_education = this.user.education;
  }
}
