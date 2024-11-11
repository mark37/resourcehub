import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-item',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './delete-item.component.html',
  styleUrl: './delete-item.component.scss'
})
export class DeleteItemComponent implements OnChanges, AfterViewInit {
  @ViewChild('confirmCode', {static: false}) inputElement!: ElementRef;
  @Output() toggleModal = new EventEmitter<any>();
  @Input() url!: string;
  @Input() delete_id!: string;
  @Input() delete_desc!: string;

  faTrash = faTrash;
  confirm_code: string = "0000";
  confirmation_code!: string | null;
  is_loading: boolean = false;

  message: string | null = null;

  onSubmit() {
    this.is_loading = true;
    if(this.confirm_code === this.confirmation_code){
      this.http.delete(this.url, this.delete_id).subscribe({
        next: () => {
          this.is_loading = false;
          this.message = 'Code Match, Item was deleted';
          this.closeModal('item-deleted');
        },
        error: err => {
          console.log(err)
          this.is_loading = false;
          this.generateCode();
        }
      });

    }else{
      this.generateCode();
      this.message = 'Code mismatch, please try again';
      // this.toastr.info('Code mismatch, please try again', 'Incorrect Code');
    }
  }

  generateCode(){
    this.is_loading = false;
    this.confirmation_code = null
    this.confirm_code = Math.floor(Math.random() * 1000).toString().padStart(4, '0');
  }

  closeModal(value: string) {
    this.toggleModal.emit(value);
  }

  constructor(
    private http: HttpService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateCode();
  }

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }
}
