import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowLeft, faLocationDot, faSave, faUpload } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { postingForm } from './postingForm';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-posting-page',
  templateUrl: './posting-page.component.html',
  styleUrl: './posting-page.component.scss'
})
export class PostingPageComponent implements OnInit {
  @Output() togglePosting = new EventEmitter<any>();
  faUpload = faUpload;
  faSave = faSave;
  faArrowLeft = faArrowLeft;
  faLocationDot = faLocationDot;

  postingForm: FormGroup = postingForm();
  municipality!: string;

  editorContent: string = '';  // Stores the editor content
  submittedContent: string = '';  // Stores the submitted content
  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };

  partTimeList: any[] = [];
  modals: any[string] = [];
  isLoading: boolean = false;
  geoLocation!: any;
  showGoogleMap: boolean = false;
  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: 15.475578308105469, lng: 120.59635162353516 },
    zoom: 14,
    fullscreenControl: false,
    draggableCursor: 'default',
    draggingCursor: 'grab',
  };

  center: google.maps.LatLngLiteral = { lat: 15.475578308105469, lng: 120.59635162353516 };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event?: google.maps.MapMouseEvent) {
    if (event?.latLng) {
      console.log(event?.latLng?.toJSON())
      this.markerPositions[0] = event?.latLng?.toJSON();
      console.log(this.markerPositions)
    }
  }

  onSubmit() {
    console.log(this.postingForm)
    this.http.post('posting-information', this.postingForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: err => console.log(err)
    })
  }

  saveLongLat() {
    this.geoLocation = this.markerPositions[0];
    this.postingForm.patchValue({
      coordinates: {latitude: this.geoLocation.lat, longitude: this.geoLocation.lng}
    })
    this.toggleMap();
  }

  toggleMap() {
    this.showGoogleMap = !this.showGoogleMap;
  }

  municipalities: any = [];
  barangays: any = [];

  loadDemog() {
    this.http.get('psgc/municipalities/'+this.municipality, {params: {'include':'barangays'}}).subscribe({
      next: (data: any) => {
        this.barangays = data.data.barangays;
      },
      error: err => console.log(err)
    });
  }

  createForm() {
    // formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/Manila')
    this.postingForm =  this.formBuilder.nonNullable.group({
      id: [null],
      date_published: ['2024-10-21', Validators.required],
      date_end: [null, Validators.required],
      lib_posting_category_id: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      slot: [null, Validators.required],
      address: [null, Validators.required],
      barangay_code: [null, Validators.required],
      coordinates: [null, Validators.required]
    });
  }

  loadLibraries() {
    this.http.get('psgc/provinces/0306900000', {params: {'include':'municipalities'}}).subscribe({
      next: (data: any) => {
        this.municipalities = data.data.municipalities;
        this.createForm();
      },
      error: err => console.log(err)
    })
  }

  closeComponent(){
    this.togglePosting.emit()
  }

  constructor (
    private http: HttpService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadLibraries();
  }
}
