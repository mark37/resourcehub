import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCheckCircle, faCircleNotch, faCircleXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';

@Component({
  selector: 'app-recent-part-time',
  templateUrl: './recent-part-time.component.html',
  styleUrl: './recent-part-time.component.scss'
})
export class RecentPartTimeComponent {
  faCircleNotch = faCircleNotch;
  faXmarkCircle = faXmarkCircle;
  faCheckCircle = faCheckCircle;
  faCircleXmark = faCircleXmark;

  recentPartTime: any[] = [];
  isLoading: boolean = false;

  loadList() {
    this.isLoading = true;

    let params = { lib_posting_category_id: 1, per_page: 'all' };
    this.http.get('posting-application', {params}).subscribe({
      next: (data: any) => {
        console.log(data);
        this.recentPartTime = data.data;
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  selected_posting: any;
  modals: any = [];
  toggleModal(name: string, data?: any) {
    this.selected_posting = data ? data.posting : null;
    if(data) this.selected_posting['applicants'] = [data];

    this.modals[name] = !this.modals[name];
  }
  constructor (
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
}
