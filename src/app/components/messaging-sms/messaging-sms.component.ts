import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleNotch, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-messaging-sms',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './messaging-sms.component.html',
  styleUrl: './messaging-sms.component.scss'
})
export class MessagingSmsComponent implements OnInit {
  @Input() selected_user!: any;

  faPaperPlane = faPaperPlane;
  faCircleNotch = faCircleNotch;

  message!: string | null;
  is_saving: boolean = false;

  sendSMS(){
    if(this.message && this.message !== '') {
      this.is_saving = true;

      let params: {message: string, contact_number: string, user_id: string} = {
        message: this.message,
        user_id: this.selected_user.id,
        contact_number: this.selected_user.contact_number
      }
      this.http.post('send-sms', params).subscribe({
        next: (data: any) => {
          console.log(data)
          this.is_saving = false;
        },
        error: err => console.log(err)
      })
    }

  }

  getSegmentCount(char_count: number) : number {
    return Math.ceil(char_count / 160);
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    console.log(this.selected_user)
  }
}
