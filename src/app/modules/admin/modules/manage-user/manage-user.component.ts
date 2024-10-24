import { Component, OnInit } from '@angular/core';
import { faCircleNotch, faFilter, faPenToSquare, faTableColumns } from '@fortawesome/free-solid-svg-icons';
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

  userList: any = [];
  meta!: any;
  is_active: boolean = false;
  category: any[] = [
    { id: 'verified', title: 'Verified'},
    { id: 'pending', title: 'Pending'},
    // { id: 'applied', title: 'Applied'},
  ];

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
    if(this.is_verified) params['is_verified'] = this.is_verified;
    if(this.lib_cat_id) params['lib_cat_id'] = this.lib_cat_id;
    if(this.start_date) params['start_date'] = this.start_date;
    if(this.end_date) params['end_date'] = this.end_date;

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

  modals: any = [];
  selected_user!: any;
  toggleModal(name: string, data?: any) {
    this.selected_user = data;
    this.modals[name] = !this.modals[name];
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
}
