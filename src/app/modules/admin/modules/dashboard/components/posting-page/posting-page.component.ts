import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowLeft, faCircleNotch, faLocationDot, faSave, faUpload } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../../../../shared/http.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { postingForm } from './postingForm';
import { CommonModule, formatDate } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { QuillEditorComponent } from 'ngx-quill';
import { DeleteItemComponent } from '../../../../../../components/delete-item/delete-item.component';

@Component({
  selector: 'app-posting-page',
  templateUrl: './posting-page.component.html',
  styleUrl: './posting-page.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    GoogleMapsModule,
    CommonModule,
    QuillEditorComponent,
    DeleteItemComponent
  ]
})
export class PostingPageComponent implements OnInit {
  @Output() toggleModal = new EventEmitter<any>();
  @Input() selected_posting!: any;

  faUpload = faUpload;
  faSave = faSave;
  faArrowLeft = faArrowLeft;
  faLocationDot = faLocationDot;
  faCircleNotch = faCircleNotch;

  postingForm: FormGroup = postingForm();
  municipality!: string;
  isSaving: boolean = false;
  min_date: string = formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/manila');

  editorContent: string = '';  // Stores the editor content
  submittedContent: string = '';  // Stores the submitted content
  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };

  requirementList: {label: string, var_name: string}[] = [
    {label: 'No existing scholarship', var_name: 'no_scholar_flag'},
    {label: 'Non-OFW parents', var_name: 'no_ofw_flag'},
    {label: 'No shiftee', var_name: 'no_shiftee_flag'},
    {label: 'No Irregular', var_name: 'no_irregular_flag'}
  ];

  partTimeList: any[] = [];
  modals: any[string] = [];
  municipalities: any = [];
  barangays: any = [];
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

  toggleMyModal(name: string) {
    if(name==='item-deleted') {
      this.modals['delete-item'] = false;
      this.closeComponent();
    } else {
      this.modals[name] = !this.modals[name];
    }

  }

  addMarker(event?: google.maps.MapMouseEvent) {
    if (event?.latLng) {
      this.markerPositions[0] = event?.latLng?.toJSON();
    }
  }

  onSubmit(published?: boolean) {
    this.isSaving = true;
    if(published) {
      const date = formatDate(new Date(), 'yyyy-MM-dd', 'en', 'Asia/Manila');
      this.postingForm.patchValue({'date_published': date})
    }
    this.http.post('posting-information', this.postingForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.isSaving = false;
        this.closeComponent()
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

  loadDemog() {
    this.http.get('psgc/municipalities/'+this.municipality, {params: {'include':'barangays'}}).subscribe({
      next: (data: any) => {
        this.barangays = data.data.barangays;
      },
      error: err => console.log(err)
    });
  }

  updateValidators(){
    if(this.postingForm.value.lib_posting_category_id === '1') {
      this.postingForm.controls['coordinates'].enable();
    } else {
      this.postingForm.controls['coordinates'].disable();
    }
  }

  deletePost() {
    this.http.delete('posting-information/', this.postingForm.value.id).subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: err => console.log(err)
    })
  }

  createForm() {
    this.postingForm =  this.formBuilder.nonNullable.group({
      id: [null],
      date_published: [null],
      date_end: [null, Validators.required],
      lib_posting_category_id: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      slot: [null, Validators.required],
      address: [null, Validators.required],
      barangay_code: [null, Validators.required],
      coordinates: [null, Validators.required],
      no_scholar_flag: [false],
      no_ofw_flag : [false],
      no_shiftee_flag: [false],
      no_irregular_flag: [false],
    });

    console.log(this.selected_posting)
    if(this.selected_posting) {
      this.municipality = this.selected_posting.barangay.psgc_10_digit_code.substring(0,7).padEnd(10, '0');
      this.loadDemog();

      this.postingForm.patchValue({
        ...this.selected_posting,
        coordinates: {latitude: this.selected_posting.latitude, longitude: this.selected_posting.longitude}
      });

      this.markerPositions = [{lat: this.selected_posting.latitude, lng: this.selected_posting.longitude}];
      this.geoLocation = this.markerPositions[0];
      if(this.selected_posting.date_published) this.postingForm.disable();
    }
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
    this.toggleModal.emit()
  }

  constructor (
    private http: HttpService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.isSaving = false;
    this.loadLibraries();
  }
}
