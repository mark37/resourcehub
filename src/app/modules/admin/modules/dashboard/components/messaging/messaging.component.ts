import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowLeft, faCircleNotch, faPaperPlane, faSave } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrl: './messaging.component.scss'
})
export class MessagingComponent implements OnInit {
  @Output() toggleModal = new EventEmitter<any>();
  @Input() selected_posting!: any;

  faSave = faSave;
  faCircleNotch = faCircleNotch;
  faPaperPlane = faPaperPlane;
  faArrowLeft = faArrowLeft;

  interview_message!: string;
  mobile_message_approved!: string;
  mobile_message_rejected!: string;
  email_message_approved!: string;
  email_message_rejected!: string;

  is_saving: boolean = false;

  getSegmentCount(char_count: number) : number {
    return Math.ceil(char_count / 160);
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

  saveTemplate() {
    this.is_saving = true;
    let params: any ={
      posting_id: this.selected_posting.id,
      interview_message: this.interview_message,
      mobile_message_approved: this.mobile_message_approved,
      mobile_message_rejected: this.mobile_message_rejected,
      email_message_approved: this.email_message_approved,
      email_message_rejected: this.email_message_rejected
    };

    console.log(params);
    this.http.post('message-template', params).subscribe({
      next: (data: any) => {
        console.log(data);
        this.message_template = data.data;
        if(this.message_template) {
          this.interview_message = this.message_template.interview_message;
          this.mobile_message_approved = this.message_template.mobile_message_approved;
          this.mobile_message_rejected = this.message_template.mobile_message_rejected;
          this.email_message_approved = this.message_template.email_message_approved;
          this.email_message_rejected = this.message_template.email_message_rejected;
        }
        this.is_saving = false;
      },
      error: err => console.log(err)
    })
  }

  message_template!: any;
  getMessageTemplate(data: any) {
    this.is_saving = true;
    let params: any = {posting_id: data.id};
    this.http.get('message-template', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.message_template = data.data[0];

        if(this.message_template) {
          this.interview_message = this.message_template.interview_message;
          this.mobile_message_approved = this.message_template.mobile_message_approved;
          this.mobile_message_rejected = this.message_template.mobile_message_rejected;
          this.email_message_approved = this.message_template.email_message_approved;
          this.email_message_rejected = this.message_template.email_message_rejected;
        }
        this.is_saving = false;
      },
      error: err => console.log(err)
    })
  }

  closeModal() {
    this.toggleModal.emit();
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    console.log(this.selected_posting);
    this.getMessageTemplate(this.selected_posting);
  }
}
