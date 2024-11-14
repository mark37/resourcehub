import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cancel-application',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './cancel-application.component.html',
  styleUrl: './cancel-application.component.scss'
})
export class CancelApplicationComponent implements OnChanges, AfterViewInit {
  @ViewChild('confirmCode', {static: false}) inputElement!: ElementRef;
  @Output() toggleCancelModal = new EventEmitter<any>();
  @Input() selected_application_id!: string;

  faBan = faBan;
  confirm_code: string = "0000";
  confirmation_code!: string | null;
  is_loading: boolean = false;

  message: string | null = null;

  onSubmit() {
    this.is_loading = true;
    if(this.confirm_code === this.confirmation_code){
      this.http.delete('posting-application/', this.selected_application_id).subscribe({
        next: () => {
          this.is_loading = false;
          this.message = 'Code Match, Item was deleted';
          this.closeModal();
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

  closeModal() {
    this.toggleCancelModal.emit();
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
