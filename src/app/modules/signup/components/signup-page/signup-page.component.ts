import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faArrowUpFromBracket, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { signUpForm } from './signUpForm';
import { HttpService } from '../../../../shared/http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent implements OnInit, AfterViewInit {
  @Output() closeSignUpPage = new EventEmitter<any>();
  @Input() withStudentEmail!: boolean;
  @ViewChild('emailInput', { static: false }) emailInput!: ElementRef;

  faArrowUpFromBracket = faArrowUpFromBracket;
  faCircleNotch = faCircleNotch;

  modals: any[string] = [];
  page: number = 0;

  signUpForm: FormGroup = signUpForm();

  showOTPPage: boolean = false;
  formSubmitted: boolean = false;

  emails_domain: string[] = ['student.tsu.edu.ph', 'tarlac.sti.edu.ph', 'cldhei.edu.ph', 'pwutarlac.edu.ph'];


  resendCode() {

  }

  toggleOTPPage() {
    this.showOTPPage = !this.showOTPPage;
  }

  email_valid: boolean = false;
  navigatePage(page_value: number) {
    if(page_value >= 1 && page_value <= 3) {
      if(!this.email_valid && page_value === 1) {
        console.log('test')
        this.checkEmail();
      } else {
        if(page_value === 1) this.loadLibraries();

        if(!this.signUpForm.valid) {
          this.formSubmitted = true;
        } else {
          this.formSubmitted = false;
          this.page = page_value;
          this.toggleRequired(page_value);
        }
      }
    } else {
      this.page = page_value;
    }
  }

  checking_email: boolean = false;
  email_err!: string | null;
  student_email: boolean = false;
  checkEmail() {
    this.checking_email = true;
    this.http.checkEmail({ params: { email: this.signUpForm.value.email }}).subscribe({
      next: (data: any) => {
        const split = this.signUpForm.value.email.split('@');

        this.student_email = this.emails_domain.includes(split[1])
        this.checking_email = false;
        this.loadLibraries();
        this.page = 1;
      },
      error: err => {
        console.log(err)
        this.email_err = err.error.message;
        this.checking_email = false;
      }
    })
  }

  is_saving: boolean = false;
  submit_message!: any;
  onSubmit() {
    this.signUpForm.patchValue({
      ofw_flag: this.signUpForm.value.ofw_flag ? 1 : 0,
      scholar_flag: this.signUpForm.value.scholar_flag ? 1 : 0,
      shiftee_flag: this.signUpForm.value.shiftee_flag ? 1 : 0,
      irregular_flag: this.signUpForm.value.irregular_flag ? 1 : 0,
    });

    let formData = new FormData();
    Object.keys(this.signUpForm.controls).forEach((key) => {
      const control = this.signUpForm.get(key);

      if(control?.value instanceof File) {
        formData.append(key, control.value);
      } else if (control) {
        formData.append(key, control.value ?? '');
      }
    });

    this.is_saving = true;
    this.http.register(formData).subscribe({
      next: (data: any) => {
        this.submit_message = data.message;
        this.is_saving = false;
      },
      error: err => {
        this.submit_message = err.error.message;
        this.is_saving = false;
      }
    });
  }

  toggleRequired(page_value: number){
    let validatorArray!: string[];
    switch (page_value) {
      case 1:
        validatorArray = [
          'first_name', 'last_name', 'contact_number',
          'gender', 'birthdate', 'province_code', 'municipality_code',
          'barangay_code', 'address', 'place_of_birth'
        ];
        this.addValidator(validatorArray);
        break;
      case 2:
        validatorArray = [
          'lib_school_id', 'course_code', 'year_level',
          'photo', 'report_of_grade'
        ];
        this.addValidator(validatorArray);
        break;
      case 3:
        validatorArray = [
          'average_monthly_income'
        ];
        this.addValidator(validatorArray);
        break;
      default:
        break;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }

  addValidator(validatorArray: string[]) {
    validatorArray.forEach(value => {
      if(value === 'contact_number') {
        this.signUpForm.get(value)?.setValidators([Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
      } else {
        this.signUpForm.get(value)?.setValidators([Validators.required]);
      }
      this.signUpForm.get(value)?.updateValueAndValidity();
    });
  }

  suffixes!: {code: string, suffix_desc: string}[];
  schools!: {id: string, desc: string}[];
  courses!: {id: string, desc: string}[];
  year_levels!: {id: string, desc: string}[];
  provinces!: {code: string, name: string}[];
  municipalities!: {code: string, name: string}[] | null;
  barangays!: {code: string, name: string}[] | null;
  incomes!: {id: string, desc: string}[];
  loading_libraries: boolean = false;
  loadLibraries(){
    if(!this.suffixes && !this.provinces && !this.schools && !this.courses && !this.year_levels && !this.incomes ) {
      this.loading_libraries = true;
      const getSuffixes = this.http.get('libraries/suffix-names');
      const getProvinces = this.http.get('psgc/provinces', { params: {per_page: 'all'}});
      const getSchools = this.http.get('libraries/school', { params: {per_page: 'all'}});
      const getCourses = this.http.get('libraries/academic-programs', { params: {per_page: 'all'}});
      const getYearLevels = this.http.get('libraries/year-level', { params: {per_page: 'all'}});
      const getIncomes = this.http.get('libraries/monthly-income', { params: {per_page: 'all'}});

      forkJoin([getSuffixes, getProvinces, getSchools, getCourses, getYearLevels, getIncomes]).subscribe({
        next: ([dataSuffixes, dataProvinces, dataSchools, dataCourses, dataYearLevels, dataIncomes]: any) => {
          this.suffixes = dataSuffixes.data;
          this.provinces = dataProvinces.data;
          this.schools = dataSchools.data;
          this.courses =  dataCourses.data;
          this.year_levels = dataYearLevels.data;
          this.incomes = dataIncomes.data;

          this.loading_libraries = false;
        },
        error: err => console.log(err)
      });
    }
  }

  handleKeyPress(event: KeyboardEvent, button: HTMLButtonElement) {
    if(event.key === 'Enter') {
      button.click();
    }
  }

  getDemog(loc: string, code: string, include: string){
    if (loc === 'psgc/provinces') {
      this.signUpForm.patchValue({ municipality_code: null, barangay_code: null });
      this.municipalities = null;
      this.barangays = null;
    }

    this.http.get(loc+'/'+code,{params:{'include':include}}).subscribe({
      next: (data: any) => { (this as any)[include] = data.data[include] },
      error: err => console.log(err)
    });
  }

  file_err_message!: string | null;
  onFileSelected(event: Event, formControlName: string) {
    this.file_err_message = null;

      const file = (event.target as HTMLInputElement).files?.[0];
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      if (file && allowedTypes.includes(file.type)) {
        this.signUpForm.patchValue({ [formControlName]: file });
      } else {
        this.file_err_message = 'Invalid file type. Only PDF, DOC, DOCX, JPG, and PNG files are allowed.';
        this.signUpForm.patchValue({ [formControlName]: null });
      }

      console.log(this.signUpForm.value)
  }

  show_form: boolean = false;
  createForm() {
    this.signUpForm = this.formBuilder.nonNullable.group({
      id: [null],
      first_name: [null],
      middle_name: [null],
      last_name: [null],
      suffix_name: ['NA'],
      contact_number: [null],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{6,}$')]],
      password_confirmation: [null, [Validators.required, Validators.minLength(6)]],
      gender: [null],
      birthdate: [null],
      province_code: [null],
      municipality_code: [null],
      barangay_code: [null],
      address: [null],
      scholar_flag: [false],
      shiftee_flag: [false],
      irregular_flag: [false],
      place_of_birth: [null],
      lib_school_id: [null],
      lib_education_level_id: [3],
      lib_year_level_id: [null],
      lib_academic_program_id: [null],
      ofw_flag: [false],
      fathers_name: [null],
      fathers_occupation: [null],
      fathers_company: [null],
      mothers_name: [null],
      mothers_occupation: [null],
      mothers_company: [null],
      average_monthly_income: [null],

      cor_url: [null],
      photo_url: [null],
      grade_url: [null],
    });

    this.show_form = true;
  }

  closeSignUp() {
    this.closeSignUpPage.emit()
  }

  toggleModal(name: string) {
    this.modals[name] = !this.modals[name]
  }

  constructor (
    private formBuilder: FormBuilder,
    private http: HttpService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    if(this.show_form && this.emailInput) {
      this.cdRef.detectChanges();
      this.emailInput.nativeElement.focus();
    }
  }
}
