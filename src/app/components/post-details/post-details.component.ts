import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from '../../shared/http.service';
import { faArrowLeft, faFileLines, faSave, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, QuillEditorComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  @Output() toggleModal = new EventEmitter<any>();
  @Input() selected_posting!: any;
  @Input() isAuthenticated!: boolean;

  faSave = faSave;
  faFileLines = faFileLines;
  faArrowLeft = faArrowLeft;
  faXmark = faXmark;
  public htmlContent: SafeHtml | null = null;
  showConfirmation: boolean = false;

  editorConfig = {
    toolbar: [ ]
  };

  navigateTo() {
    this.router.navigate(['login'])
  }

  toggleConfirmation() {
    this.showConfirmation = !this.showConfirmation;
  }

  onSubmit(applied?: boolean){
    let params: any = {};
    params['posting_id'] = this.selected_posting.id;
    if(applied) {
      params['is_applied'] = 1;
      params['date_applied'] = formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/manila');
    }

    console.log(params)
    this.http.post('posting-application', params).subscribe({
      next: () => this.closeModal(),
      error: err => console.log(err)
    });
  }

  closeModal() {
    this.toggleModal.emit();
  }

  constructor(
    private http: HttpService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.selected_posting);
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.selected_posting.description);
  }
}
