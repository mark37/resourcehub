import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faFileLines, faSave } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';
import { CommonModule, formatDate } from '@angular/common';

@Component({
  selector: 'app-apply-now',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './apply-now.component.html',
  styleUrl: './apply-now.component.scss'
})
export class ApplyNowComponent {
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
    private http: HttpService
  ) { }

  ngOnInit(): void {
    // this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.selected_posting.description);
  }
}
