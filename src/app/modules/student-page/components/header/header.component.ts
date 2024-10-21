import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faXmark = faXmark;
  modals: any[string] = [];

  withCred: boolean = false;
  menuList: {name:string, location:string, requiredCred:boolean}[] = [
    {name: 'Dashboard', location: 'dashboard', requiredCred: true},
    {name: 'Scholarships', location: 'scholarship', requiredCred: false},
    {name: 'Part-time Jobs', location: 'part-time', requiredCred: false},
    {name: 'History', location: 'history', requiredCred: true},
  ];

  toggleModal(name: string){
    this.modals[name] = !this.modals[name];
  }

  navigateTo(location:string) {
    if(this.modals['menuList']) this.toggleModal('menuList');
    this.router.navigate(['student/'+location])

  }

  constructor (
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
