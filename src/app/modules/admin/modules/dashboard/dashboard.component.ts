import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faCircleNotch, faEllipsis, faFileExcel, faFilter, faPaperPlane, faPenToSquare, faPrint, faSave } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';
import { formatDate } from '@angular/common';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';

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
  faCircleNotch = faCircleNotch;
  faSave = faSave;
  faPrint = faPrint;
  faFileExcel = faFileExcel;

  max_date = formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/manila');
  showMessaging: boolean = false;
  showApplicants: boolean = false;
  showPostingComponent: boolean = false;
  isLoading: boolean = false;
  postList: any[] = [];
  applicantList: any[] = [];
  modals: any = [];
  selected_posting!: any;
  category!: string;
  is_published!: boolean;
  start_date!: string;
  end_date!: string;
  meta!: any;

  categoryList: {title:string ,id:string }[] = [
    {title: 'Part-time Jobs', id: '1'},
    {title: 'Scholarships', id: '2'},
  ];

  publishedList: {title:string ,id:string }[] = [
    {title: 'Published', id: 'published'},
    {title: 'Unpublished', id: 'unpublished'},
  ];

  editorContent: string = '';  // Stores the editor content
  submittedContent: string = '';  // Stores the submitted content

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };

  sms_message!: string | null;

  toggleMessaging(data?: any) {
    this.showMessaging = !this.showMessaging;
  }

  toggleApplicants(data?: any) {
    this.selected_posting = data;
    this.showApplicants = !this.showApplicants;
  }

  toggleModal(name: string, data?: any) {
    this.selected_posting = data;
    this.modals[name] = !this.modals[name];

    if(name !== 'show-email' && name !== 'show-sms') {
      if(this.modals['show-posting'] === false) {
        this.router.navigate(['/admin/dashboard']);
        this.loadList();
      } else {
        this.loadList();
      }
    }
  }

  togglePosting(data?: any){
    this.showPostingComponent = !this.showPostingComponent;
  }

  searchTerm!: string;
  municipality_code!: string;
  municipalities: any = [];
  loadLibraries() {
    this.http.get('psgc/provinces/0306900000', {params: {'include':'municipalities'}}).subscribe({
      next: (data: any) => {
        this.municipalities = data.data.municipalities;
        this.loadList(1, true);
      },
      error: err => console.log(err)
    })
  }

  loadList(page?: any, create_post?: boolean) {
    this.isLoading = true;
    let params: any = {};
    params['page'] = page ?? 1;
    params['include'] = 'applicants';
    params['per_page'] = 10;
    if(this.start_date) params['start_date'] = this.start_date;
    if(this.end_date) params['end_date'] = this.end_date;
    if(this.category) params['lib_posting_category_id'] = this.category;
    if(this.is_published) params['is_published'] = this.is_published;
    if(this.searchTerm) params['search'] = this.searchTerm;
    if(this.municipality_code) params['municipality_code'] = this.municipality_code;

    this.http.get('posting-information', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.postList = data.data;
        this.meta = data.meta;
        this.isLoading = false;
        if(!this.modals['show-posting']) this.checkUrlParams()
      },
      error: err => console.log(err)
    });
  }

  checkUrlParams() {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      console.log(params['create_post'])

      this.modals['show-posting'] = params['create_post'] === 'true' ? true : false;

    })
  }
  allPostingArray!: {title: string, date_published: string, date_end: string, slot: number, address: string}[];
  getAllData() {
    let params: any = {};
    params['include'] = 'applicants';
    params['per_page'] = 10;
    if(this.start_date) params['start_date'] = this.start_date;
    if(this.end_date) params['end_date'] = this.end_date;
    if(this.category) params['lib_posting_category_id'] = this.category;
    if(this.is_published) params['is_published'] = this.is_published;

    this.allPostingArray = [];

    const fetchPage = (page: number) => {
      params['page'] = page;

      this.http.get('posting-information', { params }).subscribe({
        next: (data: any) => {
          const filteredData = data.data.map((item: any) => ({
            title: item.title,
            address: item.address,
            applied_slot: item.posting_applications_count,
            slot: item.slot,
            date_published: item.date_published,
            date_end: item.date_end
          }));

          this.allPostingArray.push(...filteredData);
          if( page < data.meta.last_page ) {
            fetchPage( page + 1 );
          } else {
            this.exportToExcel(this.allPostingArray)
          }
        },
        error: err => console.log(err)
      });
    };

    fetchPage(1);
  }

  exportToExcel(data: any) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workBook: XLSX.WorkBook = { Sheets: {'data': worksheet}, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' });

    this.saveAsExcelFile(excelBuffer, 'posting_list');
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}.xlsx`);
  }

  navigationEnd$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    tap(() => {
      console.log('end')
      this.modals['show-posting'] === false
      this.loadList();
    })
  );

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadLibraries();
    this.navigationEnd$.subscribe();
  }
}
