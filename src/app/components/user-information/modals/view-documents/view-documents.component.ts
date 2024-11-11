import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-documents',
  standalone: true,
  imports: [],
  templateUrl: './view-documents.component.html',
  styleUrl: './view-documents.component.scss'
})
export class ViewDocumentsComponent {
  @Output() toggleModal = new EventEmitter<any>();
  @Input() selected_data!: any;

  closeModal() {
    this.toggleModal.emit()
  }
}
