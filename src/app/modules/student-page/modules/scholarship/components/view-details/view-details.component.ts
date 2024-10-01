import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent {
  @Output() toggleModal = new EventEmitter<any>();

  faArrowLeft = faArrowLeft;

  closeModal() {
    this.toggleModal.emit();
  }
}
