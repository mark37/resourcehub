import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { faArrowRight, faCheckCircle, faCircleNotch, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-part-time',
  templateUrl: './part-time.component.html',
  styleUrl: './part-time.component.scss'
})
export class PartTimeComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  faCircleNotch = faCircleNotch;
  faArrowRight = faArrowRight;
  faSearch = faSearch;
  faFilter = faFilter;
  faCheckCircle = faCheckCircle;

  partTimeList: any[] = [];
  modals: any[string] = [];
  isLoading: boolean = false;
  search!: string;

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: 15.475578308105469, lng: 120.59635162353516 },
    zoom: 14,
    fullscreenControl: false,
    draggableCursor: 'default',
    draggingCursor: 'grab',
  };

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: any[] = [];

  addMarker() {
    if(Object.entries(this.partTimeList).length > 0) {
      Object.entries(this.partTimeList).forEach(([key, value]:any, index) => {
        let marker = {lat: value.latitude, lng: value.longitude}
        this.markerPositions.push({title: value.title, position: marker});
      });
    }
  }

  marker_title!: string;
  openInfoWindow(marker: MapMarker, title: string) {
    this.marker_title = title;
    if(this.infoWindow) this.infoWindow.open(marker);
  }

  loadPartTime(page?: number){
    this.isLoading = true;
    let params: any = {};
    params['page'] = page ?? 1;
    params['per_page'] = 10;
    params['lib_posting_category_id'] = 1;

    if(this.search) params['search'] = this.search;

    this.http.get('posting-information', { params }).subscribe({
      next: (data: any) => {
        this.partTimeList = data.data;
        console.log(this.partTimeList);
        this.addMarker()
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }

  selected_posting!: any;
  toggleModal(name: string, data?: any) {
    this.selected_posting = data;
    this.modals[name] = !this.modals[name];
  }

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.loadPartTime();
  }
}
