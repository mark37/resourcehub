import { Component, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare, faCircleCheck, faFilter, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit{
  faFilter = faFilter;
  faXmark = faXmark;
  faCircleCheck = faCircleCheck
  faXmarkCircle = faXmarkCircle;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  category: string | null = null;
  isLoading: boolean = false;

  categoryList: { name: string, id: string}[] = [
    { name: 'Scholarship', id: '2' },
    { name: 'Part-time', id: '1' },
  ];

  applicationList: any[] = [];

  onSubmit() {
    let params = {};

    this.http.post('', params).subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: err => console.log(err)
    })
  }

  loadList() {
    this.isLoading = true;
    let params: any = { 'include': 'posting', is_applied: 1, per_page: 'all' };
    if(this.category) params['lib_posting_category_id'] = this.category;
    this.http.get('posting-application', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.applicationList = data.data;
        this.isLoading = false;
      },
      error: err => console.log(err)
    });
  }

  modals: any = [];
  selected_posting!: any;
  toggleModal(name: string, data?: any) {
    this.selected_posting = data ? data.posting : null;
    if(data) this.selected_posting['applicants'] = [data];
    this.modals[name] = !this.modals[name]
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
}
