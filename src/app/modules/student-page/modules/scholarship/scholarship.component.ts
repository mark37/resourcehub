import { Component, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.scss'
})
export class ScholarshipComponent implements OnInit {
  faSearch = faSearch;
  faFilter = faFilter;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  searchTerm!: string;
  scholarList: any[] = [];
  modals: any[string] = [];

  toggleModal(name: string) {
    this.modals[name] = !this.modals[name];
  }

  loadScholarship(page?: string) {
    let params: any = {};

    if(page) params['page'] = page;
    if(this.searchTerm) params['search'] = this.searchTerm;

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

  ngOnInit(): void {
    this.loadScholarship();
  }
}
