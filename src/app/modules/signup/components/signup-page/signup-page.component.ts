import { Component, Input } from '@angular/core';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  @Input() withStudentEmail:boolean = false;
  faArrowUpFromBracket = faArrowUpFromBracket;

  modals: any[string] = [];
  page: number = 0;

  navigatePage(page_value: number) {
    this.page = page_value;
  }

  toggleModal(name: string) {
    this.modals[name] = !this.modals[name]
  }
}
