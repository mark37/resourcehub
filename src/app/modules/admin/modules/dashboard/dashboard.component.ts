import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faEllipsis, faFilter, faPaperPlane, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  faFilter = faFilter;
  faEllipsis = faEllipsis;
  faPaperPlane = faPaperPlane;
  faArrowLeft = faArrowLeft;
  faPenToSquare = faPenToSquare;

  showMessaging: boolean = false;
  showApplicants: boolean = false;
  showPostingComponent: boolean = false;

  isLoading: boolean = false;

  categoryList: {title:string ,id:string }[] = [
    {title: 'Part-time Jobs', id: '1'},
    {title: 'Scholarships', id: '2'},
  ];

  postList: any[] = [];

  editorContent: string = '';  // Stores the editor content
  submittedContent: string = '';  // Stores the submitted content

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };

  onSubmit() {

  }

  toggleMessaging(data?: any) {
    this.showMessaging = !this.showMessaging;
  }

  applicantList: any[] = [];
  toggleApplicants(data?: any) {
    this.showApplicants = !this.showApplicants;
    /* this.http.get('').subscribe({
      next: (data: any) => {
        console.log(data);
        this.applicantList = data.data;
        this.showApplicants = !this.showApplicants;
      },
      error: err => console.log(err)
    }) */
  }

  togglePosting(){
    this.showPostingComponent = !this.showPostingComponent;
  }

  loadList(page?: number) {
    this.isLoading = true;
    let params: any = {};
    params['page'] = page ?? 1;

    this.http.get('', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.postList = data.data;

        this.isLoading = false;
      },
      error: err => console.log(err)
    });
  }

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    // this.loadList();

    this.postList = [
      {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Scholarship', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
      {title: 'Test', item_type: 'Part-time', date_published: 'Jan 01, 2024', filled_slots: '100', total_slots: '250'},
    ];
  }
}
