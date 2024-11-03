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

  approved_sms_message!: string;
  rejected_sms_message!: string;
  approved_email_message!: string;
  rejected_email_message!: string;

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
      is_approved: 1,
      approved_sms_message: this.approved_sms_message,
      rejected_sms_message: this.rejected_sms_message,
      approved_email_message: this.approved_email_message,
      rejected_email_message: this.rejected_email_message
    };

    this.http.post('message-template', params).subscribe({
      next: (data: any) => {
        console.log(data);
        this.message_template = data.data;
        if(this.message_template) {
          this.approved_sms_message = this.message_template.approved_sms_message;
          this.rejected_sms_message = this.message_template.rejected_sms_message;
          this.approved_email_message = this.message_template.approved_email_message;
          this.rejected_email_message = this.message_template.rejected_email_message;
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

        if(this.message_template && this.message_template.message) this.approved_sms_message = this.message_template.message;
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
