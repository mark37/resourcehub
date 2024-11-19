import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpService } from '../../../../../../shared/http.service';
import { faBan, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deactivate-account',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  templateUrl: './deactivate-account.component.html',
  styleUrl: './deactivate-account.component.scss'
})
export class DeactivateAccountComponent implements OnChanges, AfterViewInit {
  @ViewChild('confirmCode', {static: false}) inputElement!: ElementRef;
  @Output() toggleCancelModal = new EventEmitter<any>();
  @Input() selected_application_id!: string;

  faBan = faBan;
  faCircleNotch = faCircleNotch;

  confirm_code: string = "0000";
  confirmation_code!: string | null;
  is_loading: boolean = false;

  message: string | null = null;

  onSubmit() {
    this.is_loading = true;
    let params = {is_active: false};
    if(this.confirm_code === this.confirmation_code){
      this.http.update('user-information/', this.selected_application_id, params).subscribe({
        next: () => {
          this.is_loading = false;
          this.message = 'Code Match, account deactivated';
          localStorage.clear();
          this.router.navigate(['/']);
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
    private http: HttpService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateCode();
  }

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }
}
