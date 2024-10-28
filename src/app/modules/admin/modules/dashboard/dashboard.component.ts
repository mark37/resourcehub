import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faCircleNotch, faEllipsis, faFilter, faPaperPlane, faPenToSquare, faSave } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  faFilter = faFilter;
  faEllipsis = faEllipsis;
  faPaperPlane = faPaperPlane;
  faArrowLeft = faArrowLeft;
  faPenToSquare = faPenToSquare;
  faCircleNotch = faCircleNotch;
  faSave = faSave;

  max_date = formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/manila');
  showMessaging: boolean = false;
  showApplicants: boolean = false;
  showPostingComponent: boolean = false;
  isLoading: boolean = false;
  postList: any[] = [];
  applicantList: any[] = [];
  modals: any = [];
  selected_posting!: any;
  category!: string;
  is_published!: boolean;
  start_date!: string;
  end_date!: string;
  meta!: any;

  categoryList: {title:string ,id:string }[] = [
    {title: 'Part-time Jobs', id: '1'},
    {title: 'Scholarships', id: '2'},
  ];

  publishedList: {title:string ,id:string }[] = [
    {title: 'Published', id: 'published'},
    {title: 'Unpublished', id: 'unpublished'},
  ];

  editorContent: string = '';  // Stores the editor content
  submittedContent: string = '';  // Stores the submitted content

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };

  sms_message!: string | null;

  getSegmentCount(char_count: number) : number {
    return Math.ceil(char_count / 160);
  }

  toggleMessaging(data?: any) {
    this.showMessaging = !this.showMessaging;
  }

  toggleApplicants(data?: any) {
    this.selected_posting = data;
    this.showApplicants = !this.showApplicants;
  }

  toggleModal(name: string, data?: any) {
    this.selected_posting = data;
    this.modals[name] = !this.modals[name];

    if(name !== 'show-email' && name !== 'show-sms') {
      this.loadList();
    }

    if(name === 'show-email' || name === 'show-sms') {
      if(data) {
        this.getMessageTemplate(data);
      } else {
        this.message_template = null;
        this.sms_message = null;
      }
    }
  }

  message_template!: any;
  is_saving: boolean = false;
  getMessageTemplate(data: any) {
    this.is_saving = true;
    let params: any = {posting_id: data.id};
    this.http.get('message-template', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.message_template = data.data[0];

        if(this.message_template && this.message_template.message) this.sms_message = this.message_template.message;
        this.is_saving = false;
      },
      error: err => console.log(err)
    })
  }

  saveTemplate() {
    this.is_saving = true;
    let params: any ={
      posting_id: this.selected_posting.id,
      is_approved: 1,
      message: this.sms_message
    };

    this.http.post('message-template', params).subscribe({
      next: (data: any) => {
        console.log(data);
        this.message_template = data.data;
        if(this.message_template.message) this.sms_message = this.message_template.message;
        this.is_saving = false;
      },
      error: err => console.log(err)
    })
  }

  job_sent: boolean = false;
  sendMessage() {
    this.is_saving = true;
    let params: any = { posting_id: this.selected_posting.id };
    this.http.post('send-bulk-sms', params).subscribe({
      next:(data: any) => {
        console.log(data)
        this.job_sent = true;
        this.is_saving = false;
      },
      error: err => console.log(err)
    })
  }

  togglePosting(data?: any){
    this.showPostingComponent = !this.showPostingComponent;
  }

  loadList(page?: any) {
    this.isLoading = true;
    let params: any = {};
    params['page'] = page ?? 1;
    params['include'] = 'applicants';
    params['per_page'] = 10;
    if(this.start_date) params['start_date'] = this.start_date;
    if(this.end_date) params['end_date'] = this.end_date;
    if(this.category) params['lib_posting_category_id'] = this.category;
    if(this.is_published) params['is_published'] = this.is_published;

    this.http.get('posting-information', { params }).subscribe({
      next: (data: any) => {
        // console.log(data);
        this.postList = data.data;
        this.meta = data.meta;
        this.isLoading = false;
      },
      error: err => console.log(err)
    });
  }

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
}
