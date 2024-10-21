import { Component, OnInit } from '@angular/core';
import { faCircleCheck, faFilter, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
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

  category: string | null = null;
  isLoading: boolean = false;

  categoryList: { name: string, id: string}[] = [
    { name: 'Scholarship', id: '1' },
    { name: 'Part-time', id: '2' },
  ];

  applicationList: { title: string, type: string, date: string}[] = [
    {title: 'CHED Tulong-dunong program', type: 'Scholarship', date: '10/01/2024'},
    {title: 'Kass & Kaye Scholarship Program', type: 'Scholarship', date: '10/01/2024'},
    {title: 'Tarlac City', type: 'Part-time', date: '10/01/2024'},
    {title: 'Tarlac State University', type: 'Part-time', date: '10/01/2024'},
  ];

  onSubmit() {

  }

  loadList() {
    this.isLoading = true;
    this.http.get('').subscribe({
      next: (data: any) => {
        console.log(data);
        this.applicationList = data.data;
        this.isLoading = false;
      },
      error: err => console.log(err)
    });
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
}
