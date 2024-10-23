import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faCircleNotch, faCircleXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-scholarhip',
  templateUrl: './recent-scholarhip.component.html',
  styleUrl: './recent-scholarhip.component.scss'
})
export class RecentScholarhipComponent implements OnInit {
  faCircleNotch = faCircleNotch;
  faXmarkCircle = faXmarkCircle
  faCheckCircle = faCheckCircle;
  faCircleXmark = faCircleXmark;

  recentScholarhip: any[] = [];

  isLoading: boolean = false;

  navigateTo() {

  }

  loadList() {
    this.isLoading = true;
    let params = { lib_posting_category_id: 2 };
    this.http.get('posting-application', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.recentScholarhip = data.data;
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  modals: any = [];
  selected_posting!: any;

  toggleModal(name: string, data?: any){
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
