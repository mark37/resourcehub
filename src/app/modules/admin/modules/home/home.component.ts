import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowUpRightFromSquare, faCircleNotch, faFilter, faPenToSquare, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  faPenToSquare = faPenToSquare;
  faTableColumns = faTableColumns;
  faFilter = faFilter;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faArrowLeft = faArrowLeft;
  faCircleNotch = faCircleNotch;

  userList: any[] = [];

  isLoading: boolean = false;
  modals: any = [];
  selected_user!: any;
  updating_user: boolean = false;

  loading_draft_post: boolean = false;
  draft_posts!: any;
  loadDraftPost() {
    this.loading_draft_post = true;

    let params: any = {};
    params['per_page'] = 'all';
    params['is_published'] = 'unpublished';

    this.http.get('posting-information', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.draft_posts = data.data;
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  loadList(page?: number) {
    this.isLoading = true;
    let params: any = {};
    params['per_page'] = 'all';
    params['user_info'] = 1;
    params['is_verified'] = 'pending';

    this.http.get('user-information', { params }).subscribe({
      next: (data: any) => {
        this.userList = data.data;
        this.loadDraftPost();
      },
      error: err => console.log(err)
    })
  }

  toggleModal(name: string, data?: any) {
    this.selected_user = data;
    this.modals[name] = !this.modals[name];

    if(!this.modals['user-details']) this.loadList();
  }

  navigateTo(location: string) {
    this.router.navigate([location]);
  }

  verifyUser(value: boolean) {
    this.updating_user = true;
    this.selected_user['user_verified'] = value === true ? 1 : 0 ;
    this.selected_user['is_active'] = value === true ? 1 : 0 ;

    this.http.update('user-information/', this.selected_user.id, this.selected_user).subscribe({
      next: (data: any) => {
        console.log(this.selected_user);
        this.updating_user = false;
        this.toggleModal('user-details')
      },
      error: err => console.log(err)
    })
  }

  constructor (
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
}
