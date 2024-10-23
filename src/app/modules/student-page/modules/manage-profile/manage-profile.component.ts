import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../shared/http.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.scss'
})
export class ManageProfileComponent implements OnInit {
  faEdit = faEdit;

  loadUserInformation() {
    let params: any = [];

    this.http.get('user-information', { params }).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: err => console.log(err)
    })
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.loadUserInformation();
  }
}
