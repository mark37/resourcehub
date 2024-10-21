import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-label.component.html',
  styleUrl: './error-label.component.scss'
})
export class ErrorLabelComponent {
  @Input() childForm!: FormGroup;
  @Input() childFormName!: string;

  get f(): { [key: string]: AbstractControl } {
    return this.childForm.controls;
  }
}
