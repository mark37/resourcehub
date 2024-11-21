import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FontAwesomeModule, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  faBars = faBars;
  faXmark = faXmark;

  modals: any[string] = [];

  menuList: any[] = [
    {name: 'Scholarships', loc: 'student/scholarship'},
    {name: 'Part-time Jobs', loc: 'student/part-time'},
/*     {name: 'About Us', loc: ''},
    {name: 'User Agreement', loc: ''},
    {name: 'Term of Use', loc: ''}, */
  ];

  navigateTo(location: string) {
    this.router.navigate(['/'+location]);
  }

  toggleMenu(name: string){
    this.modals[name] = !this.modals[name];
  }

  constructor (
    private router: Router
  ) { }
}
