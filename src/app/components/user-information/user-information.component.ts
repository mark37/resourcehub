import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCakeCandles, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent implements OnChanges{
  @Input() selected_user!: any;

  faCakeCandles = faCakeCandles;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;

  user!: any;

  constructor (
    private http: HttpService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.user = this.selected_user;
  }
}
