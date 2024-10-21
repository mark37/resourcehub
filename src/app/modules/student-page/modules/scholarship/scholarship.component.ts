import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare, faCircleNotch, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

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

  searchTerm!: string;
  scholarList: any[] = [];
  modals: any[string] = [];

  per_page: number = 5;
  current_page!: number;
  last_page!: number;
  from!: number;
  to!: number;
  total!: number;

  toggleModal(name: string) {
    this.modals[name] = !this.modals[name];
  }

  loadScholarship(page?: string) {
    let params: any = {};

    if(page) params['page'] = page;
    if(this.searchTerm) params['search'] = this.searchTerm;

    /* this.http.get('', { params }).subscribe({
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
    }) */
    this.scholarList = [
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' },
      { title: 'Test', filled_slots: '100', total_slots: '500', date_posted: 'Sept 9, 2023' }
    ];
  }

  constructor (
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.loadScholarship();
  }
}
