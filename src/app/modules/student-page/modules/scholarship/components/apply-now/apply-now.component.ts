import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-apply-now',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './apply-now.component.html',
  styleUrl: './apply-now.component.scss'
})
export class ApplyNowComponent {
  @Output() toggleModal = new EventEmitter<any>();

  faArrowLeft = faArrowLeft;

  closeModal() {
    this.toggleModal.emit();
  }
}
