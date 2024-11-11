import { Location } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faArrowLeft, faArrowRightFromBracket, faBell, faComment, faGear, faHouse, faPenToSquare, faTableColumns, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { filter, tap } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent  {
  // @ViewChild('notifDiv') notifDivElement!: ElementRef;

  faXmark = faXmark;
  faArrowLeft = faArrowLeft;
  faGear = faGear;
  faArrowRightFromBracket = faArrowRightFromBracket;
  faPenToSquare = faPenToSquare;

  menuList: any[] = [
    { name: 'Home', location: 'home' , icon: faHouse},
    { name: 'Dashboard', location: 'dashboard', icon: faTableColumns },
    { name: 'Notifications', location: '', icon: faBell },
    { name: 'Create Post', location: 'create-post', icon: faPenToSquare },
    { name: 'Manage Users', location: 'manage-user', icon: faUser }
  ];

  notfications: any[] = [
    { name: 'Juan Dela Cruz', message: 'turned an application form in', program: 'CHED-Tulong Dunong Program', type: 'Scholarship'},
    { name: 'Mari Makiing', message: 'submitted an application form in', program: 'Property Consultan Job Post', type: 'Part-time Job'},
    { name: 'Juan Dela Cruz', message: 'turned an application form in', program: 'CHED-Tulong Dunong Program', type: 'Scholarship'},
    { name: 'Mari Makiing', message: 'submitted an application form in', program: 'Property Consultan Job Post', type: 'Part-time Job'},
  ]
  modals: any[string] = [];

  navigateTo(location: string) {
    if(location === 'create-post') {
      this.router.navigate(['admin/dashboard'], { queryParams : {create_post: true}});
    } else {
      this.router.navigate(['admin/'+location]);
    }

  }

  toggleMenu(name: string, location?: boolean) {
    this.modals[name] = !this.modals[name];
  }

  signOut() {
    this.http.signout().subscribe({
      next: (data: any) => {
        localStorage.clear();
        this.router.navigate(['/']);
      },
      error: err => console.log(err)
    });
    /* localStorage.clear();
    this.router.navigate(['/']) */
  }

  constructor(
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
    this.current_url = this.location.path();
    this.navigationEnd$.subscribe();
  }

  /* ngAfterViewChecked(): void {
    if(this.modals['menuList']) {
      setTimeout(() => {
        if(this.notifDivElement) {
          this.notifDivElement.nativeElement.focus();
        }
      })
    }
  } */
}
