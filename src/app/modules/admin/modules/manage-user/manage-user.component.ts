import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faCircleCheck, faCircleNotch, faClock, faFileExcel, faFilter, faPaperPlane, faPenToSquare, faTableColumns, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';
import { formatDate } from '@angular/common';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss'
})
export class ManageUserComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faTableColumns = faTableColumns;
  faFilter = faFilter;
  faCircleNotch = faCircleNotch;
  faArrowLeft = faArrowLeft;
  faCircleCheck = faCircleCheck;
  faXmarkCircle = faXmarkCircle;
  faClock = faClock;
  faArrowRight = faArrowRight;
  faPaperPlane = faPaperPlane;
  faFileExcel = faFileExcel;

  userList: any = [];
  meta!: any;
  active_status: boolean = false;
  emailType!: string | null;

  category: string[] = ['pending', 'verified', 'rejected'];
  activeStatus: string[] = ['active', 'inactive'];
  studentEmailList: string[] = ['school', 'personal'];

  scholarPartTime: any[] = [
    { id: 2, title: 'Scholarship'},
    { id: 1, title: 'Part-time Jobs'}
  ];

  is_verified!: string;
  lib_cat_id!: string;
  start_date!: string;
  end_date!: string;
  max_date: string = formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/manila');

  isLoading: boolean =false;
  loadList(page?: any) {
    this.isLoading = true;
    let params: any = {};
    params['page'] = page ?? 1;
    params['user_info'] = 1;
    if(this.active_status) params['active_status'] = this.active_status;
    if(this.emailType) params['email_used'] = this.emailType;
    if(this.is_verified) params['is_verified'] = this.is_verified;
    if(this.lib_cat_id) params['lib_cat_id'] = this.lib_cat_id;
    if(this.start_date) params['start_date'] = this.start_date;
    if(this.end_date) params['end_date'] = this.end_date;

    console.log(params)
    this.http.get('user-information', { params }).subscribe({
      next: (data:any) => {
        console.log(data);
        this.userList = data.data;
        this.meta = data.meta;
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  toggleActive(data: any) {
    data['is_active'] = !data['is_active'];
    this.http.update('user-information/', data.id, data).subscribe({
      next: () => console.log('updated successfully'),
      error: err => console.log(err)
    })
  }

  modals: any = [];
  selected_user!: any;
  toggleModal(name: string, data?: any) {
    this.selected_user = data;
    if(name === 'closeAll') {
      this.modals['user-information'] = false;
      this.modals['show-sms'] = false;
    } else {
      console.log(this.selected_user)
      this.modals[name] = !this.modals[name];
    }
  }

  updating_user: boolean = false;
  verifyUser(value: boolean) {
    this.updating_user = true;
    this.selected_user['user_verified'] = value === true ? 1 : 0 ;

    this.http.update('user-information/', this.selected_user.id, this.selected_user).subscribe({
      next: (data: any) => {
        console.log(this.selected_user);
        this.updating_user = false;
      },
      error: err => console.log(err)
    })
  }

  allApplicantArray!: any[];
  getAllData() {
    let params: any = {};
    params['user_info'] = 1;
    params['per_page'] = 20;
    if(this.active_status) params['active_status'] = this.active_status;
    if(this.is_verified) params['is_verified'] = this.is_verified;
    if(this.lib_cat_id) params['lib_cat_id'] = this.lib_cat_id;
    if(this.start_date) params['start_date'] = this.start_date;
    if(this.end_date) params['end_date'] = this.end_date;

    this.allApplicantArray = [];

    const fetchPage = (page: number) => {
      params['page'] = page;

      this.http.get('user-information', { params }).subscribe({
        next: (data: any) => {
          console.log(data)
          const filteredData = data.data.map((item: any) => ({
            last_name: item.last_name,
            first_name: item.first_name,
            email: item.email,
            contact_number: item.contact_number,
            is_scholar: item.scholar_flag ? 'Yes' : 'No',
            is_irregular: item.irregular_flag ? 'Yes' : 'No',
            is_shiftee: item.shiftee_flag ? 'Yes' : 'No',
            is_parent_ofw: item.parents.ofw_flag ? 'Yes' : 'No',
            course: item.academic_program.desc,
            year_level: item.year_level.desc,
            school: item.school.desc,
            verified_account: item.user_verified ? 'Yes' : 'No',
            active_account: item.is_active ? 'Yes' : 'No',
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

    this.saveAsExcelFile(excelBuffer, 'user_list');
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
    this.loadList();
  }
}
