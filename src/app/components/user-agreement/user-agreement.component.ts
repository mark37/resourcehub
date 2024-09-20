import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-agreement',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-agreement.component.html',
  styleUrl: './user-agreement.component.scss'
})
export class UserAgreementComponent {
  @Output() toggleModal = new EventEmitter<any>();
  faArrowLeft = faArrowLeft;

  closeModal() {
    this.toggleModal.emit()
  }
}
