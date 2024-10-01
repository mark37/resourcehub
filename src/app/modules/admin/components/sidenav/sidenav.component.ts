import { Location } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faArrowLeft, faBell, faComment, faHouse, faTableColumns, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent  {
  // @ViewChild('notifDiv') notifDivElement!: ElementRef;

  faXmark = faXmark;
  faArrowLeft = faArrowLeft;

  menuList: any[] = [
    { name: 'Home', location: 'home' , icon: faHouse},
    { name: 'Notifications', location: '', icon: faBell },
    { name: 'Manage Users', location: 'manage-user', icon: faUser },
    { name: 'Dashboard', location: 'dashboard', icon: faTableColumns },
    { name: 'Communicate', location: 'communicate', icon: faComment }
  ];

  notfications: any[] = [
    { name: 'Juan Dela Cruz', message: 'turned an application form in', program: 'CHED-Tulong Dunong Program', type: 'Scholarship'},
    { name: 'Mari Makiing', message: 'submitted an application form in', program: 'Property Consultan Job Post', type: 'Part-time Job'},
    { name: 'Juan Dela Cruz', message: 'turned an application form in', program: 'CHED-Tulong Dunong Program', type: 'Scholarship'},
    { name: 'Mari Makiing', message: 'submitted an application form in', program: 'Property Consultan Job Post', type: 'Part-time Job'},
  ]
  modals: any[string] = [];

  navigateTo(location: string) {
    this.router.navigate(['admin/'+location]);
  }

  toggleMenu(name: string, location?: boolean) {
    /* console.log(name, this.modals[name], location)
    if(this.modals[name] === true && location) {
      this.modals[name] = false;
    } else { */
      this.modals[name] = !this.modals[name];
    /* }
    console.log(name, this.modals[name], location) */
  }

  constructor(
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
