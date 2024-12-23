import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faArrowRightFromBracket, faBars, faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { filter, tap } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faXmark = faXmark;
  faGear = faGear;
  faArrowRightFromBracket = faArrowRightFromBracket;

  modals: any[string] = [];
  withCred: boolean = false;
  menuList: {name:string, location:string, requiredCred:boolean}[] = [
    {name: 'Dashboard', location: 'dashboard', requiredCred: true},
    {name: 'Scholarships', location: 'scholarship', requiredCred: false},
    {name: 'Part-time Jobs', location: 'part-time', requiredCred: false},
    {name: 'History', location: 'history', requiredCred: true},
    // {name: 'Deactivate Account', location: 'deactivate', requiredCred: true},
    // {name: 'Login', location: 'part-time', requiredCred: false},
    // {name: 'Signup', location: 'part-time', requiredCred: false},
  ];

  accountMenuList: {name:string, location:string, requiredCred:boolean}[] = [
    {name: 'Update Profile', location: 'manage-profile', requiredCred: true},
    // {name: 'Deactivate Account', location: 'deactivate', requiredCred: true},
    {name: 'Sign Out', location: 'signout', requiredCred: true},
  ];

  toggleModal(name: string){
    this.modals[name] = !this.modals[name];
  }

  navigateTo(location:string) {
    if(location === 'signout') {
      this.signout();
    } else {
      console.log(location)
      if(!this.withCred && location === '') {

      } else {
        if(location === 'manage-profile') this.toggleModal('accountMenuList')
          if(this.modals['menuList']) this.toggleModal('menuList');
          this.router.navigate(['student/'+location])
      }
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignup() {
    this.router.navigate(['/signup'])
  }

  signout() {
    this.http.signout().subscribe({
      next: (data: any) => {
        console.log(data)
        localStorage.clear();
        this.router.navigate(['/'])
      },
      error: err => console.log(err)
    });
  }

  constructor (
    private http: HttpService,
    private router: Router,
    private location: Location
  ) { }

  current_url!: string;
  navigationEnd$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    tap(() => {
      this.current_url = this.location.path();
    })
  );

  ngOnInit(): void {
    this.withCred = localStorage.getItem('access_token') ? true : false;

    this.current_url = this.location.path();
    this.navigationEnd$.subscribe();
  }
}
