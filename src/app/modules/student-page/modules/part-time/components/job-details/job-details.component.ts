import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faFileLines, faSave } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent implements OnInit {
  public htmlContent: SafeHtml | null = null;

  @Output() toggleModal = new EventEmitter<any>();
  @Input() selected_posting!: any;
  @Input() isAuthenticated!: boolean;

  faSave = faSave;
  faFileLines = faFileLines;
  faArrowLeft = faArrowLeft;

  showConfirmation: boolean = false;

  savePost() {
    let params: any = {
      posting_id: this.selected_posting.id
    };

    this.http.post('posting-application', params).subscribe({
      next: (data: any) => {
        this.closeModal();
      },
      error: err => console.log(err)
    })
  }

  toggleConfirmation() {
    this.showConfirmation = !this.showConfirmation;
  }

  onSubmit(applied?: boolean){
    let params: any = {};
    params['posting_id'] = this.selected_posting.id

    if(applied) params['is_applied'] = 1; params['date_applied'] = formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/manila');

    this.http.post('posting-application', params).subscribe({
      next: () => {
        this.closeModal();
      },
      error: err => console.log(err)
    });
  }

  applyPost() {
    let params: any = {
      posting_id: this.selected_posting.id,
      is_applied: 1,
      date_applied: formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/manila')
    };

    this.http.post('posting-application', params).subscribe({
      next: (data: any) => {
        this.closeModal();
      },
      error: err => console.log(err)
    })
  }

  closeModal() {
    this.toggleModal.emit();
  }

  constructor(
    private http: HttpService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.selected_posting.description);
  }
}
