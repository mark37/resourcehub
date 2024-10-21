import { Component, EventEmitter, Output } from '@angular/core';
import { faArrowLeft, faSave, faUpload } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';

@Component({
  selector: 'app-posting-page',
  templateUrl: './posting-page.component.html',
  styleUrl: './posting-page.component.scss'
})
export class PostingPageComponent {
  @Output() togglePosting = new EventEmitter<any>();
  faUpload = faUpload;
  faSave = faSave;
  faArrowLeft = faArrowLeft;

  editorContent: string = '';  // Stores the editor content
  submittedContent: string = '';  // Stores the submitted content

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };

  onSubmit() {

  }

  closeComponent(){
    this.togglePosting.emit()
  }

  constructor (
    private http: HttpService
  ) { }
}
