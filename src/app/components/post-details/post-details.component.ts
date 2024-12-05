import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from '../../shared/http.service';
import { faArrowLeft, faCircleCheck, faCircleNotch, faFileLines, faSave, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuillEditorComponent } from 'ngx-quill';
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
  faCircleCheck = faCircleCheck;
  faCircleNotch = faCircleNotch;

  // public htmlContent: SafeHtml | null = null;
  showConfirmation: boolean = false;
  showSuccessfullApplication: boolean = false;
  editorConfig = {
    toolbar: [ ]
  };

  navigateTo() {
    this.router.navigate(['login'])
  }

  toggleConfirmation() {
    this.showConfirmation = !this.showConfirmation;
  }

  is_saving: boolean = false;
  onSubmit(applied?: boolean){
    this.is_saving = true;
    let params: any = {};
    params['posting_id'] = this.selected_posting.id;
    if(applied) {
      params['is_applied'] = 1;
      params['date_applied'] = formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/manila');
    }

    this.http.post('posting-application', params).subscribe({
      next: () => {
        this.is_saving = false;
        this.showConfirmation = false;
        if(applied) {
          this.showSuccessfullApplication =  true;
          this.closeModal();
        } else {
          this.closeModal();
        }
      },
      error: err => console.log(err)
    });
  }

  closeModal() {
    this.toggleModal.emit();
  }

  withUserEducation: boolean = false;
  show_form: boolean = false;
  loadUserInformation(reloadOnly?: boolean) {
    let params: any = { user_info: 1 };

    this.http.get('user-information', { params }).subscribe({
      next: (data: any) => {
        this.withUserEducation = data.data[0].user_education.length > 0 ? true : false;
        this.show_form = true;
      },
      error: err => console.log(err)
    })
  }

  constructor(
    private http: HttpService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUserInformation();
    this.isAuthenticated = localStorage.getItem('access_token') ? true : false;
    console.log(this.selected_posting);
    // this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.selected_posting.description);
  }
}
