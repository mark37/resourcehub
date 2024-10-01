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

  menuList: {name:string, location:string}[] = [
    {name: 'Dashboard', location: 'dashboard'},
    {name: 'Scholarships', location: 'scholarship'},
    {name: 'Part-time Jobs', location: 'part-time'},
    {name: 'History', location: 'history'},
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
    this.current_url = this.location.path();
    this.navigationEnd$.subscribe();
  }
}
