import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../shared/http.service';
import { faAdd, faCircleNotch, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { educationForm, referenceForm, workExperienceForm } from './UserForm';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.scss'
})
export class ManageProfileComponent implements OnInit {
  faEdit = faEdit;
  faAdd = faAdd;
  faCircleNotch = faCircleNotch;

  educationForm:FormGroup = educationForm();
  referenceForm:FormGroup = referenceForm();
  workExperienceForm:FormGroup = workExperienceForm();

  educationList!: any;
  referenceList!: any;
  workExperienceList!: any;
  selected_user!: any;
  show_form: boolean = false;
  showUpdateForm: boolean = false;
  education_levels!: {id: string, desc: string}[];
  academic_programs!: {id: string, desc: string}[];

  isFormSaving: any = [];
  onSubmit(url: string, formData: FormGroup, listName: string, formName:string) {
    this.isFormSaving[url] = true;
    formData.patchValue({ user_id: this.selected_user.id });
    this.http.post(url, formData.value).subscribe({
      next: (data: any) => {
        console.log(data);
        (this as any)[formName].reset();
        this.loadData(url, listName);
      },
      error: err => console.log(err)
    });
  }

  loadData(url: string, listName: string) {
    let params: any = { user_id: this.selected_user.id }
    this.http.get(url, { params }).subscribe({
      next: (data: any) => {
        console.log(listName, data.data);
        (this as any)[listName] = data.data;

        console.log(this.educationList);
        this.isFormSaving[url] = false;
      },
      error: err => console.log(err)
    })
  }

  loadSelected(form_name: FormGroup, data: any) {
    form_name.patchValue({...data});
  }

  loadUserInformation() {
    this.show_form = false;
    let params: any = { user_info: 1 };

    this.http.get('user-information', { params }).subscribe({
      next: (data: any) => {
        this.selected_user = data.data[0];
        console.log(this.selected_user);
        this.show_form = true;
        this.loadData('user-education', 'educationList');
        // this.toggleEditForm();
      },
      error: err => console.log(err)
    })
  }

  loadLibraries(url: string, listName: string) {
    this.http.get('libraries/' + url).subscribe({
      next: (data: any) => {
        (this as any)[listName] = data.data;
        console.log(this.education_levels)
      },
      error: err => console.log(err)
    })
  }

  createEducationForm() {
    this.educationForm = this.formBuilder.group({
      id: [null],
      user_id: [null, Validators.required],
      lib_education_level_id: [null, Validators.required],
      lib_academic_program_id: [null],
      school_name: [null, Validators.required],
      start_year: [null, Validators.required],
      end_year: [null, Validators.required],
    })
  }

  createReferenceForm() {

  }

  createWorkExperienceForm() {

  }

  toggleEditForm() {
    this.showUpdateForm = !this.showUpdateForm;
    if(!this.education_levels) this.loadLibraries('education-level', 'education_levels');
    if(!this.academic_programs) this.loadLibraries('academic-programs', 'academic_programs');
    this.createEducationForm();
    this.createReferenceForm();
    this.createWorkExperienceForm();
  }

  constructor (
    private http: HttpService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadUserInformation();
  }
}
