import { Component, EventEmitter, Output } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  @Output() toggleModal = new EventEmitter<any>();

  faArrowLeft = faArrowLeft;

  closeModal() {
    this.toggleModal.emit();
  }
}
