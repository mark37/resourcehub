import { Component, OnInit } from '@angular/core';
import { faFilter, faPenToSquare, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  faPenToSquare = faPenToSquare;
  faTableColumns = faTableColumns;
  faFilter = faFilter;

  category: any[] = [
    { id: 1, title: 'Verified'},
    { id: 2, title: 'Pending'},
    { id: 3, title: 'Applied'},
  ];

  scholarPartTime: any[] = [
    { id: 1, title: 'Scholarship'},
    { id: 2, title: 'Part-time Jobs'}
  ];

  userList: any[] = [
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
    {name: 'text', email: 'test@tsu.edu', contact: '09123456789', school: 'TSU'},
  ];

  isLoading: boolean = false;
  loadList(page?: number) {
    this.isLoading = true;
    let params: any = {};
    params['page'] = page ?? 1;

    this.http.get('user-information').subscribe({
      next: (data: any) => {
        console.log(data);

        this.userList = data.data;
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  navigateTo(location: string) {
    this.router.navigate([location]);
  }

  constructor (
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
}
