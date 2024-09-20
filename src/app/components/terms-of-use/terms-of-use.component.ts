import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.scss'
})
export class TermsOfUseComponent {
  @Output() toggleModal = new EventEmitter<any>();
  faArrowLeft = faArrowLeft;

  closeModal() {
    this.toggleModal.emit()
  }
}
