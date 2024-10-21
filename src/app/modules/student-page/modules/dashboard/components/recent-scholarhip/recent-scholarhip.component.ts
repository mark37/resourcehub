import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faCircleNotch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
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

  recentScholarhip: any[] = [];

  isLoading: boolean = false;

  navigateTo() {

  }

  loadList() {
    this.isLoading = true;
    this.http.get('').subscribe({
      next: (data: any) => {
        console.log(data);
        this.recentScholarhip = data.data;
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  constructor (
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadList();
    /* this.recentScholarhip = [
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024',  applicationStatus: true},
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024',  applicationStatus: true },
      { program: 'Scholar Test', sponsor: 'Mayor Test', deadline: '10/12/2024',  applicationStatus: true },
    ] */
  }
}
