import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TermsOfUseComponent } from '../terms-of-use/terms-of-use.component';
import { AboutComponent } from '../about/about.component';
import { UserAgreementComponent } from '../user-agreement/user-agreement.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TermsOfUseComponent, AboutComponent, UserAgreementComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  modals: any[string] = [];

  toggleModal(name: string) {
    this.modals[name] = !this.modals[name];
  }
}
