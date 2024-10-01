import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-part-time',
  templateUrl: './part-time.component.html',
  styleUrl: './part-time.component.scss'
})
export class PartTimeComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  faSearch = faSearch;
  faFilter = faFilter;

  partTimeList: any[] = [];
  modals: any[string] = [];

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: 15.475578308105469, lng: 120.59635162353516 },
    zoom: 14,
  };

  loadPartTime(){

  }

  toggleModal(name: string) {
    this.modals[name] = !this.modals[name];
  }

  ngOnInit(): void {
    this.partTimeList = [
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
      { title: 'We are looking for hardworking...', job_status: 'Part time/Full time', date_posted: 'Sept 29, 2024' },
    ]
  }

  /* constructor (
    private branchService: BranchService
  ) */
}
