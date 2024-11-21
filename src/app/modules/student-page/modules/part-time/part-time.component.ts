import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { faArrowRight, faCheckCircle, faCircleNotch, faFilter, faLocationCrosshairs, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-part-time',
  templateUrl: './part-time.component.html',
  styleUrl: './part-time.component.scss'
})
export class PartTimeComponent implements OnInit {
  @ViewChildren(MapMarker) markerRefs!: QueryList<MapMarker>;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow | undefined;

  faLocationCrosshairs = faLocationCrosshairs;
  faCircleNotch = faCircleNotch;
  faArrowRight = faArrowRight;
  faSearch = faSearch;
  faFilter = faFilter;
  faCheckCircle = faCheckCircle;
  faLocationDot = faLocationDot;

  partTimeList: any[] = [];
  modals: any[string] = [];
  isLoading: boolean = false;
  search!: string | null;
  isAuthenticated: boolean = false;
  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    // center: { lat: 15.475578308105469, lng: 120.59635162353516 },
    zoom: 14,
    fullscreenControl: false,
    draggableCursor: 'default',
    draggingCursor: 'grab',
  };
  center = { lat: 15.475578308105469, lng: 120.59635162353516 }
  zoom = 14;
  radius = 1500;
  circleOptions: google.maps.CircleOptions = {
    fillColor: 'blue',
    fillOpacity: 0.2,
    strokeColor: 'blue',
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false
  };

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  centerMarkerOptions: google.maps.MarkerOptions = {draggable: false, icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'};
  markerPositions: any[] = [];

  addMarker() {
    this.markerPositions = [];
    if(Object.entries(this.partTimeList).length > 0) {
      Object.entries(this.partTimeList).forEach(([key, value]:any, index) => {
        let marker = { position : {lat: value.latitude, lng: value.longitude}, visible: false}
        this.markerPositions.push({title: value.title, position: marker});
      });
    }
  }

  marker_title!: string;
  openInfoWindow(marker: MapMarker, title: string) {
    this.marker_title = title;
    if(this.infoWindow) this.infoWindow.open(marker);
  }

  openWindowFromDetails(lat: number, lng: number, title: string) {
    const markerIndex = this.markerPositions.findIndex(marker => marker.position.position.lat === lat && marker.position.position.lng === lng);

    if(markerIndex !== -1) {
      this.marker_title = title;
      if(this.infoWindow) this.infoWindow.open(this.markerRefs.get(markerIndex));
    }
  }

  with_radius: boolean = true;
  loadPartTime(show_all: boolean, page?: number){
    this.isLoading = true;
    let params: any = {};

    params['page'] = page ?? 1;
    params['per_page'] = 'all';
    params['lib_posting_category_id'] = 1;
    params['is_published'] = 'published';
    // if(this.isAuthenticated)
    if(show_all === false) {
      this.with_radius = true;
      params['radius'] = this.radius;
      params['lat'] = this.center.lat;
      params['lng'] = this.center.lng;
    } else {
      this.with_radius = false;
      // this.search = null;
    }

    if(this.search) params['search'] = this.search;

    let access_url:string;
    if(localStorage.getItem('access_token')) {
      access_url = 'posting-information';
    } else {
      access_url = 'public-info'
    }

    this.http.get(access_url, { params }).subscribe({
      next: (data: any) => {
        this.partTimeList = data.data;
        // console.log(this.partTimeList);
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
    if(!this.modals[name]) this.loadPartTime(false)
  }

  // Function to calculate distance between two points in meters
  getDistanceFromCenter(position: google.maps.LatLngLiteral): number {
    const R = 6371000; // Radius of Earth in meters
    const dLat = this.degreesToRadians(position.lat - this.center.lat);
    const dLng = this.degreesToRadians(position.lng - this.center.lng);
    const lat1 = this.degreesToRadians(this.center.lat);
    const lat2 = this.degreesToRadians(position.lat);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  isMarkerWithinRadius(position: google.maps.LatLngLiteral): boolean {
    return this.getDistanceFromCenter(position) <= this.radius;
  }

  // Update visibility of markers based on radius
  updateMarkers() {
    this.markerPositions.forEach(marker => {
      marker.visible = this.isMarkerWithinRadius(marker.position);
    });
  }

  gettingLocation: boolean = false;
  useDeviceLocation() {
    this.gettingLocation = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.zoom = 14; // Adjust zoom level to focus on the location
          this.loadPartTime(false, 1);
          this.gettingLocation = false;
        },
        error => {
          console.error('Error obtaining location', error);
          alert('Unable to retrieve location. Please check permissions.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  updatingLocation: boolean = false;
  toggleLocationSelection() {
    this.updatingLocation = !this.updatingLocation;
    this.loadPartTime(false, 1)
  }

  getMapWidth() : string {
    let screenWidth = this.screenWidth
    if(screenWidth >= 768) {
      screenWidth = ((this.screenWidth/5)*2.73);
    }

    const map_size = screenWidth - 40
    return map_size+'px'
  }

  screenWidth!: number;
  screenHeight!: number;
  getMapHeight(): any {
    const map_size = this.screenHeight*.73;
    return map_size+'px'
  }

  getMapHeightStr(): string {
    const map_size = this.screenHeight*.73;
    return 'h-'+map_size+'px'
  }
  adjustCenterLocation(event?: google.maps.MapMouseEvent) {
    if (event?.latLng) {
      this.center = event?.latLng?.toJSON();
    }
  }

  constructor(
    private http: HttpService
  ) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnInit(): void {
    this.loadPartTime(false, 1);

  }
}
