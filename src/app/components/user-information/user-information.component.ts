import { Component, Input, OnInit } from '@angular/core';
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
export class UserInformationComponent implements OnInit{
  @Input() selected_user!: any;

  faCakeCandles = faCakeCandles;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;

  user!: any;

  constructor (
    private http: HttpService
  ) { }

  ngOnInit(): void {
    console.log(this.selected_user);
    this.user = this.selected_user;
  }
}
