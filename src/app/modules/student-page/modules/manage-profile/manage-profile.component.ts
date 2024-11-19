import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../shared/http.service';
import { faAdd, faCircleNotch, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { educationForm, parentsForm, referenceForm, userForm, workExperienceForm } from './UserForm';
import { formatDate } from '@angular/common';

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
  parentsForm:FormGroup = parentsForm();
  userForm:FormGroup = userForm();

  educationList!: any;
  referenceList!: any;
  workExperienceList!: any;
  selected_user!: any;
  show_form: boolean = false;
  showUpdateForm: boolean = false;
  education_levels!: {id: string, desc: string}[];
  academic_programs!: {id: string, desc: string}[];
  income_list!: {id: string, desc: string}[];
  school_list!: {id: string, desc: string}[];
  year_level_list!: {id: string, desc: string}[];

  isFormSaving: any = [];
  convertDates(date: string): string | null {
    return date ? formatDate(date, 'yyyy-MM', 'en', 'Asia/manila') : null;
  }

  updateAcademicInfo() {
    this.isFormSaving['user-information'] = true;

    this.http.update('user-information/', this.userForm.value.id, this.userForm.value).subscribe({
      next: (data: any) => {
        this.isFormSaving['user-information'] = false;
        console.log(data);
      },
      error: err => console.log(err)
    })
  }

  onSubmit(url: string, formData: FormGroup, listName: string, formName:string) {
    if(formData.value.start_date) formData.patchValue({ start_date: this.convertDates(formData.value.start_date), end_date: this.convertDates(formData.value.end_date) })
    this.http.post(url, formData.value).subscribe({
      next: (data: any) => {
        (this as any)[formName].reset();
        this.loadData(url, listName);
      },
      error: err => console.log(err)
    });
  }

  loadData(url: string, listName: string) {
    this.isFormSaving[url] = true;
    let params: any = { user_id: this.selected_user.id }
    this.http.get(url, { params }).subscribe({
      next: (data: any) => {
        (this as any)[listName] = data.data;
        if(listName === 'parentsInformation') this.parentsForm.patchValue({...data.data});
        this.isFormSaving[url] = false;
      },
      error: err => console.log(err)
    })
  }

  loadSelected(form_name: FormGroup, data: any) {
    form_name.patchValue({...data});
  }

  loadUserInformation(reloadOnly?: boolean) {
    this.show_form = false;
    let params: any = { user_info: 1 };

    this.http.get('user-information', { params }).subscribe({
      next: (data: any) => {
        console.log(data)
        this.selected_user = data.data[0];
        this.show_form = true;
        this.userForm.patchValue({...data.data[0]});
        console.log(this.userForm.value)
        if(!reloadOnly) this.createForms();
      },
      error: err => console.log(err)
    })
  }
  selected_user_id!: string;
  deactivateAccount() {
    this.selected_user_id = this.userForm.value.id
    this.toggleCancelModal();
    /* this.http.post('deactivate', {params:{}}).subscribe({
      next:(data: any) => {
        console.log(data)
      },
      error: err => console.log(err)
    }) */
  }

  modals: any = [];
  toggleCancelModal() {
    console.log('test')
    this.modals['deactivate-account'] = !this.modals['deactivate-account'];
  }

  createForms() {
    this.loadData('user-education', 'educationList');
    this.loadData('user-employment', 'workExperienceList');
    this.loadData('user-reference', 'referenceList');
    this.loadData('parent-information', 'parentsInformation');
    // this.loadData('parent-information', 'parentsInformation');

    this.createEducationForm();
    this.createReferenceForm();
    this.createWorkExperienceForm();
    this.createParentsForm();

    // this.toggleEditForm();
  }

  loadLibraries(url: string, listName: string) {
    this.http.get('libraries/' + url).subscribe({
      next: (data: any) => {
        (this as any)[listName] = data.data;
      },
      error: err => console.log(err)
    })
  }

  createEducationForm() {
    this.educationForm = this.formBuilder.group({
      id: [null],
      lib_education_level_id: [null, Validators.required],
      lib_academic_program_id: [null],
      school_name: [null, Validators.required],
      start_year: [null, Validators.required],
      end_year: [null, Validators.required],
    })
  }

  createReferenceForm() {
    this.referenceForm = this.formBuilder.group({
      id: [null],
      full_name: [null, Validators.required],
      company_name: [null],
      contact_number: [null, Validators.required]
    });
  }

  createWorkExperienceForm() {
    this.workExperienceForm = this.formBuilder.group({
      id: [null],
      employer_name: [null, Validators.required],
      position: [null, Validators.required],
      job_description: [null],
      start_date: [null, Validators.required],
      end_date: [null, Validators.required]
    })
  }

  createParentsForm() {
    this.parentsForm = this.formBuilder.group({
      ofw_flag: [false],
      fathers_name: [null],
      fathers_occupation: [null],
      fathers_company: [null],
      mothers_name: [null],
      mothers_occupation: [null],
      mothers_company: [null],
      average_monthly_income: [null, Validators.required],
    });
  }

  toggleEditForm() {
    this.showUpdateForm = !this.showUpdateForm;
    if(!this.education_levels) this.loadLibraries('education-level', 'education_levels');
    if(!this.academic_programs) this.loadLibraries('academic-programs', 'academic_programs');
    if(!this.income_list) this.loadLibraries('monthly-income', 'income_list');
    if(!this.school_list) this.loadLibraries('school', 'school_list');
    if(!this.year_level_list) this.loadLibraries('year-level', 'year_level_list');

    this.loadUserInformation(true);
  }

  constructor (
    private http: HttpService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadUserInformation();
  }
}
