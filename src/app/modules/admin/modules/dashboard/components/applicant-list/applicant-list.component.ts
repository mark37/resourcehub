import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../../../../shared/http.service';
import { faArrowLeft, faCircleNotch, faFileExcel, faFilter } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrl: './applicant-list.component.scss'
})
export class ApplicantListComponent implements OnInit {
  @Output() toggleModal = new EventEmitter<any>();
  @Input() selected_posting!: any;
  faArrowLeft = faArrowLeft;
  faCircleNotch = faCircleNotch;
  faFilter = faFilter;
  faFileExcel = faFileExcel;

  applicantList: any[] = [];

  isLoading: boolean = false;
  meta!: any;
  per_page: number = 10;

  application_status!: string | null;
  statusList: string[] = ['pending', 'approved', 'rejected'];

  loadApplicants(page?: number){
    this.isLoading = true;
    let params = {
      posting_id: this.selected_posting.id,
      show_list: 1,
      per_page: this.per_page,
      application_status: this.application_status,
      is_applied: 1,
      page: page ?? 1
    };

    this.http.get('posting-application', { params }).subscribe({
      next: (data: any) => {
        this.applicantList = data.data;
        this.meta = data.meta;
        console.log(this.applicantList)
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  closeComponent() {
    this.toggleModal.emit();
  }

  modals: any = [];
  selected_application!: any;
  toggleMyModal(name: string, data?: any) {
    this.selected_application = data;
    this.modals[name] = !this.modals[name];
  }

  updateForInterviewApplicationStatus(is_approved: boolean){
    this.updating_status = true;
    this.selected_application['is_approved_interview'] = is_approved;
    this.http.update('posting-application/', this.selected_application.id, this.selected_application).subscribe({
      next: (data: any) => {
        this.updating_status = false;
        this.toggleMyModal('user-details');
      },
      error: err => console.log(err)
    });
  }

  updating_status: boolean = false;
  updateApplicationStatus(is_approved: boolean) {
    this.updating_status = true;
    this.selected_application['is_approved'] = is_approved;
    this.http.update('posting-application/', this.selected_application.id, this.selected_application).subscribe({
      next: (data: any) => {
        this.updating_status = false;
        this.toggleMyModal('user-details');
      },
      error: err => console.log(err)
    });
  }

  allApplicantArray!: any[];
  getAllData() {
    let params = {
      posting_id: this.selected_posting.id,
      show_list: 1,
      per_page: 20,
      application_status: this.application_status,
      page: 1,
      is_applied: 1
    };

    this.allApplicantArray = [];

    const fetchPage = (page: number) => {
      params['page'] = page;

      this.http.get('posting-application', { params }).subscribe({
        next: (data: any) => {
          const filteredData = data.data.map((item: any) => ({
            last_name: item.user.last_name,
            first_name: item.user.first_name,
            email: item.user.email,
            contact_number: item.user.contact_number,
            is_scholar: item.user.scholar_flag ? 'Yes' : 'No',
            is_irregular: item.user.irregular_flag ? 'Yes' : 'No',
            is_shiftee: item.user.shiftee_flag ? 'Yes' : 'No',
            is_parent_ofw: item.user.parents.ofw_flag ? 'Yes' : 'No',
            course: item.user.academic_program.desc,
            year_level: item.user.year_level.desc,
            school: item.user.school.desc,
            date_applied: item.date_applied,
            cor_url: item.user.cor_url,
            rog_url: item.user.grade_url,
            application_status: item.is_approved === null ? 'pending' : (item.is_approved === 1 ? 'approved' : 'rejected')
          }));

          this.allApplicantArray.push(...filteredData);
          if( page < data.meta.last_page ) {
            fetchPage( page + 1 );
          } else {
            this.exportToExcel(this.allApplicantArray)
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

    this.saveAsExcelFile(excelBuffer, this.selected_posting.title.toLowerCase()+'_applicant_list');
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}.xlsx`);
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    console.log(this.selected_posting)
    this.loadApplicants();
  }
}
