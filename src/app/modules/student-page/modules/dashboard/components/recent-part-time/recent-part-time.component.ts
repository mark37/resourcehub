import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCheckCircle, faCircleNotch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recent-part-time',
  templateUrl: './recent-part-time.component.html',
  styleUrl: './recent-part-time.component.scss'
})
export class RecentPartTimeComponent {
  faCircleNotch = faCircleNotch;
  faXmarkCircle = faXmarkCircle;
  faCheckCircle = faCheckCircle;

  recentPartTime: any[] = [];
  isLoading: boolean = false;

  loadList() {
    this.isLoading = true;

    this.http.get('').subscribe({
      next: (data: any) => {
        console.log(data);
        this.recentPartTime = data.data;
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  constructor (
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadList();
    /* this.recentPartTime = [
      { program: 'Part-time', sponsor: 'Store Sample', deadline: '10/12/2024',  applicationStatus: true},
      { program: 'Part-time', sponsor: 'Store Sample', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Part-time', sponsor: 'Store Sample', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Part-time', sponsor: 'Store Sample', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Part-time', sponsor: 'Store Sample', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Part-time', sponsor: 'Store Sample', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Part-time', sponsor: 'Store Sample', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Part-time', sponsor: 'Store Sample', deadline: '10/12/2024',  applicationStatus: true },
    ] */
  }
}
