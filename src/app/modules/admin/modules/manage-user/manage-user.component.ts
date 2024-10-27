import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faCircleCheck, faCircleNotch, faClock, faFilter, faPenToSquare, faTableColumns, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';
import { formatDate } from '@angular/common';

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

  userList: any = [];
  meta!: any;
  active_status: boolean = false;
  category: string[] = ['pending', 'verified', 'rejected'];
  activeStatus: string[] = ['active', 'inactive'];

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
    if(this.is_verified) params['is_verified'] = this.is_verified;
    if(this.lib_cat_id) params['lib_cat_id'] = this.lib_cat_id;
    if(this.start_date) params['start_date'] = this.start_date;
    if(this.end_date) params['end_date'] = this.end_date;
    // let params: any = { user_info: 1 };
    this.http.get('user-information', { params }).subscribe({
      next: (data:any) => {
        console.log(data);
        this.userList = data.data;
        this.meta = data.meta;
        this.isLoading = false;
        // this.toggleModal('user-information', this.userList[0])
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
    console.log(this.selected_user)
    this.modals[name] = !this.modals[name];
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

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
}
