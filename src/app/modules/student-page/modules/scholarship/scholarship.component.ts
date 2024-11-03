import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare, faCheck, faCheckCircle, faCircleNotch, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.scss'
})
export class ScholarshipComponent implements OnInit {
  faSearch = faSearch;
  faFilter = faFilter;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faCircleNotch = faCircleNotch;
  faCheckCircle = faCheckCircle;

  searchTerm!: string;
  scholarList: any[] = [];
  modals: any[string] = [];

  per_page: number = 5;
  current_page!: number;
  last_page!: number;
  from!: number;
  to!: number;
  total!: number;
  isAuthenticated: boolean = false;
  selected_posting!: any;
  toggleModal(name: string, data?: any) {
    this.selected_posting = data;
    this.modals[name] = !this.modals[name];
  }

  loadScholarship(page?: string) {
    let params: any = {};

    params['page'] = page ?? 1;
    params['lib_posting_category_id'] = 2;
    if(this.searchTerm) params['search'] = this.searchTerm;

    this.http.get('posting-information', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.scholarList = data.data;

        this.current_page = data.meta.current_page;
        this.last_page = data.meta.last_page;
        this.from = data.meta.from;
        this.to = data.meta.to;
        this.total = data.meta.total;
      },
      error: err => console.log(err)
    });
  }

  constructor (
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('access_token')) { this.isAuthenticated = true; } else { this.isAuthenticated = false; }
    this.loadScholarship();
  }
}
