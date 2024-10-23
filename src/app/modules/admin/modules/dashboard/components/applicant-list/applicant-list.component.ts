import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../../../../shared/http.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
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

  applicantList: any[] = [];

  isLoading: boolean = false;
  meta!: any;
  per_page: number = 10;

  loadApplicants(page?: number){
    this.isLoading = true;
    let params = {
      posting_id: this.selected_posting.id,
      show_list: 1,
      per_page: this.per_page
    }
    this.http.get('posting-application', { params }).subscribe({
      next: (data: any) => {
        this.applicantList = data.data;
        this.meta = data.meta;
        console.log(this.meta)
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  closeComponent() {
    this.toggleModal.emit();
  }

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    console.log()
    this.loadApplicants();
  }
}
