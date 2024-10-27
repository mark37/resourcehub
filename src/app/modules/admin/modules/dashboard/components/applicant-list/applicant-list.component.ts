import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../../../../shared/http.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faCircleNotch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

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
      application_status: this.application_status
    };

    this.http.get('posting-application', { params }).subscribe({
      next: (data: any) => {
        this.applicantList = data.data;
        this.meta = data.meta;
        // console.log(this.applicantList)
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

  updating_status: boolean = false;
  updateApplicationStatus(is_approved: boolean) {
    this.updating_status = true;
    this.selected_application['is_approved'] = is_approved;
    this.http.update('posting-application/', this.selected_application.id, this.selected_application).subscribe({
      next: (data: any) => {
        console.log(data);
        this.updating_status = false;
        this.toggleMyModal('user-details');
      },
      error: err => console.log(err)
    });
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    console.log()
    this.loadApplicants();
  }
}
